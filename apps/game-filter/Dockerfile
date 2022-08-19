ARG NODE_VERSION="16.17.0"
ARG ALPINE_VERSION="3.16"



#
## Base Stage
FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base-stage
WORKDIR /app/game-filter
RUN mkdir -p apps && apk add --no-cache tzdata


#
## Dependencies Stage
FROM base-stage AS dependencies-stage
COPY package.json package-lock.json ./
COPY angular.json nx.json decorate-angular-cli.js tsconfig.base.json ./
# 只安裝 production 相關模組，並複製出來，準備給 Release Stage 使用
RUN npm ci --omit=dev
RUN cp -R node_modules /production_node_modules
# prod & dev 模組全部安裝
RUN npm ci --include=dev


#
## Build Stage
FROM dependencies-stage AS build-stage
ENV NODE_ENV=production

COPY libs libs
COPY tools tools
COPY apps/game-filter apps/game-filter
COPY apps/game-filter-e2e apps/game-filter-e2e

RUN npx ng build && npx ng run game-filter:server


#
## Release Stage
FROM base-stage AS release-stage
ENV NODE_ENV=production

COPY --from=dependencies-stage /production_node_modules node_modules
COPY --from=build-stage /app/game-filter/dist dist

COPY angular.json nx.json decorate-angular-cli.js tsconfig.base.json ./

# EXPOSE 4000
CMD []
ENTRYPOINT ["node", "dist/apps/game-filter/server/main.js"]
