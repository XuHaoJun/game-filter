export async function loadHttpMock() {
  const HttpRequestMock = (await import('http-request-mock')).default;
  const mocker = HttpRequestMock.setup();
  mocker.get(
    '/api/games/e7/heroes',
    {
      total: 213,
      heroes: [
        {
          _id: 'alencia',
          id: 'c1100',
          name: '艾蓮西雅',
          moonlight: false,
          rarity: 5,
          attribute: 'wind',
          role: 'warrior',
          zodiac: 'crab',
          self_devotion: { type: 'max_hp_rate' },
          devotion: { type: 'def_rate' },
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/face/c1100_s.png',
            image: 'https://assets.epicsevendb.com/_source/face/c1100_su.png',
            thumbnail:
              'https://assets.epicsevendb.com/_source/face/c1100_l.png',
          },
          buffs: ['59', '2'],
          debuffs: ['18'],
          common: [],
        },
        {
          _id: 'ambitious-tywin',
          id: 'c2042',
          name: '野心份子泰溫',
          moonlight: true,
          rarity: 5,
          attribute: 'light',
          role: 'knight',
          zodiac: 'archer',
          self_devotion: { type: 'max_hp_rate' },
          devotion: { type: 'max_hp_rate' },
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/face/c2042_s.png',
            image: 'https://assets.epicsevendb.com/_source/face/c2042_su.png',
            thumbnail:
              'https://assets.epicsevendb.com/_source/face/c2042_l.png',
          },
          buffs: [],
          debuffs: ['25', '20', '19'],
          common: ['56'],
        },
        {
          _id: 'apocalypse-ravi',
          id: 'c2019',
          name: '末日蘿菲',
          moonlight: true,
          rarity: 5,
          attribute: 'dark',
          role: 'warrior',
          zodiac: 'crab',
          self_devotion: { type: 'res' },
          devotion: { type: 'max_hp_rate' },
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/face/c2019_s.png',
            image: 'https://assets.epicsevendb.com/_source/face/c2019_su.png',
            thumbnail:
              'https://assets.epicsevendb.com/_source/face/c2019_l.png',
          },
          buffs: ['46'],
          debuffs: [],
          common: [],
        },
        {
          _id: 'aramintha',
          id: 'c1048',
          name: '雅拉敏塔',
          moonlight: false,
          rarity: 5,
          attribute: 'fire',
          role: 'mage',
          zodiac: 'twins',
          self_devotion: { type: 'acc' },
          devotion: { type: 'att_rate' },
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/face/c1048_s.png',
            image: 'https://assets.epicsevendb.com/_source/face/c1048_su.png',
            thumbnail:
              'https://assets.epicsevendb.com/_source/face/c1048_l.png',
          },
          buffs: ['1'],
          debuffs: ['31', '27', '31', '20'],
          common: [],
        },
        {
          _id: 'arbiter-vildred',
          id: 'c2007',
          name: '執行官維德瑞',
          moonlight: true,
          rarity: 5,
          attribute: 'dark',
          role: 'assassin',
          zodiac: 'lion',
          self_devotion: { type: 'att_rate' },
          devotion: { type: 'acc' },
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/face/c2007_s.png',
            image: 'https://assets.epicsevendb.com/_source/face/c2007_su.png',
            thumbnail:
              'https://assets.epicsevendb.com/_source/face/c2007_l.png',
          },
          buffs: [],
          debuffs: ['22'],
          common: [],
        },
        {
          _id: 'archdemons-shadow',
          id: 'c5004',
          name: '魔神的暗影',
          moonlight: true,
          rarity: 5,
          attribute: 'dark',
          role: 'mage',
          zodiac: 'waterbearer',
          self_devotion: { type: 'att_rate' },
          devotion: { type: 'max_hp_rate' },
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/face/c5004_s.png',
            image: 'https://assets.epicsevendb.com/_source/face/c5004_su.png',
            thumbnail:
              'https://assets.epicsevendb.com/_source/face/c5004_l.png',
          },
          buffs: [],
          debuffs: ['66', '66', '22', '31'],
          common: ['35'],
        },
        {
          _id: 'baal-sezan',
          id: 'c1015',
          name: '巴爾&塞尚',
          moonlight: false,
          rarity: 5,
          attribute: 'fire',
          role: 'mage',
          zodiac: 'twins',
          self_devotion: { type: 'acc' },
          devotion: { type: 'acc' },
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/face/c1015_s.png',
            image: 'https://assets.epicsevendb.com/_source/face/c1015_su.png',
            thumbnail:
              'https://assets.epicsevendb.com/_source/face/c1015_l.png',
          },
          buffs: [],
          debuffs: ['24', '19', '27', '18'],
          common: [],
        },
        {
          _id: 'baiken',
          id: 'c1093',
          name: '梅喧',
          moonlight: false,
          rarity: 5,
          attribute: 'wind',
          role: 'assassin',
          zodiac: 'scorpion',
          self_devotion: { type: 'cri' },
          devotion: { type: 'att_rate' },
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/face/c1093_s.png',
            image: 'https://assets.epicsevendb.com/_source/face/c1093_su.png',
            thumbnail:
              'https://assets.epicsevendb.com/_source/face/c1093_l.png',
          },
          buffs: [],
          debuffs: ['32', '32', '32'],
          common: ['35', '51'],
        },
      ],
      buffs: [
        {
          _id: '1',
          id: '1',
          type: 'buff',
          name: '攻擊力增加',
          effect: '攻擊力增加50%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_up.png',
          },
        },
        {
          _id: '10',
          id: '10',
          type: 'buff',
          name: '增加迴避',
          effect: '迴避增加50%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_dodge_up.png',
          },
        },
        {
          _id: '10k',
          id: '10k',
          type: 'buff',
          name: '增加迴避',
          effect: '迴避增加50%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_dodge_up_keep.png',
          },
        },
        {
          _id: '11',
          id: '11',
          type: 'buff',
          name: '持續恢復',
          effect: '回合開始時，將恢復最大生命力的15%。可重複套用。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_heal.png',
          },
        },
        {
          _id: '11k',
          id: '11k',
          type: 'buff',
          name: '持續恢復',
          effect:
            '回合開始時恢復最大生命力的15%，可重複套用。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_heal_keep.png',
          },
        },
        {
          _id: '12',
          id: '12',
          type: 'buff',
          name: '免疫',
          effect: '目標不會受到任何弱化效果及部分有害效果的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_debuf_impossible.png',
          },
        },
        {
          _id: '12k',
          id: '12k',
          type: 'buff',
          name: '免疫',
          effect:
            '不會獲得所有的弱化效果和部分的有害效果。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_debuf_impossible_keep.png',
          },
        },
        {
          _id: '13',
          id: '13',
          type: 'buff',
          name: '反射',
          effect:
            '目標受擊時，反射部分傷害量。反射的傷害最高可達自己的最大生命力。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_reflect.png',
          },
        },
        {
          _id: '13k',
          id: '13k',
          type: 'buff',
          name: '反射',
          effect:
            '受擊時反射部分傷害量。反射的傷害最高可達自己的最大生命力。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_reflect_keep.png',
          },
        },
        {
          _id: '14',
          id: '14',
          type: 'buff',
          name: '不死',
          effect: '目標在效果持續回合期間不會死亡。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_immortality.png',
          },
        },
        {
          _id: '14k',
          id: '14k',
          type: 'buff',
          name: '不死',
          effect: '在持續回合內不會死亡。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_immortality_keep.png',
          },
        },
        {
          _id: '15',
          id: '15',
          type: 'buff',
          name: '隱身',
          effect:
            '如果有其他我軍的話，不會成為攻擊目標。受到廣域攻擊時傷害減少，受到攻擊造成的傷害時則會解除。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_hide.png',
          },
        },
        {
          _id: '15k',
          id: '15k',
          type: 'buff',
          name: '隱身',
          effect:
            '如果有其他我軍的話，不會成為攻擊目標。受到廣域攻擊時傷害減少，碰到受擊造成的傷害時則會解除。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_hide_keep.png',
          },
        },
        {
          _id: '16',
          id: '16',
          type: 'buff',
          name: '甦醒',
          effect: '目標受到致命的傷害時，會恢復最大生命力的30%並復活。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bless.png',
          },
        },
        {
          _id: '16k',
          id: '16k',
          type: 'buff',
          name: '甦醒',
          effect:
            '受到致命傷害時，恢復最大生命力的30%並復活。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bless_keep.png',
          },
        },
        {
          _id: '1k',
          id: '1k',
          type: 'buff',
          name: '攻擊力增加',
          effect: '攻擊力增加50%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_up_keep.png',
          },
        },
        {
          _id: '2',
          id: '2',
          type: 'buff',
          name: '防禦力增加',
          effect: '防禦力增加60%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_up.png',
          },
        },
        {
          _id: '2k',
          id: '2k',
          type: 'buff',
          name: '防禦力增加',
          effect: '防禦力增加60%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_up_keep.png',
          },
        },
        {
          _id: '3',
          id: '3',
          type: 'buff',
          name: '速度提升',
          effect: '速度增加30%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_speed_up.png',
          },
        },
        {
          _id: '38',
          id: '38',
          type: 'buff',
          name: '狂氣',
          effect: '攻擊力及速度增加10%。狂氣不會被解除強化。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_madness.png',
          },
        },
        {
          _id: '39',
          id: '39',
          type: 'buff',
          name: '神獸之力',
          effect: '攻擊力及暴擊率增加20%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_force_arka.png',
          },
        },
        {
          _id: '3k',
          id: '3k',
          type: 'buff',
          name: '速度提升',
          effect: '速度提升30%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_speed_up_keep.png',
          },
        },
        {
          _id: '4',
          id: '4',
          type: 'buff',
          name: '暴擊率增加',
          effect: '暴擊率增加50%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_cri_up.png',
          },
        },
        {
          _id: '40',
          id: '40',
          type: 'buff',
          name: '暴擊抗性增加',
          effect: '暴擊抗性增加50%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_crires_up.png',
          },
        },
        {
          _id: '40k',
          id: '40k',
          type: 'buff',
          name: '暴擊抗性增加',
          effect: '暴擊抗性增加50%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_crires_up_keep.png',
          },
        },
        {
          _id: '41',
          id: '41',
          type: 'buff',
          name: '魄力',
          effect: '攻擊力及防禦力增加30%。魄力不會被解除強化效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_haki.png',
          },
        },
        {
          _id: '42',
          id: '42',
          type: 'buff',
          name: '惹人愛',
          effect: '僕人！別停，快來服侍我喵！惹人愛不會被解除強化效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_lovely.png',
          },
        },
        {
          _id: '43',
          id: '43',
          type: 'buff',
          name: '歌姬',
          effect:
            '我的現場表演在回合結束之前是不會停止的！歌姬不會被解除強化效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_showtime.png',
          },
        },
        {
          _id: '44',
          id: '44',
          type: 'buff',
          name: '攻擊力大幅增加',
          effect: '攻擊力增加75%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_up2.png',
          },
        },
        {
          _id: '44k',
          id: '44k',
          type: 'buff',
          name: '攻擊力大幅增加',
          effect: '攻擊力增加75%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_up2_keep.png',
          },
        },
        {
          _id: '45',
          id: '45',
          type: 'buff',
          name: '速度大幅提升',
          effect: '速度增加45%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_speed_up2.png',
          },
        },
        {
          _id: '45k',
          id: '45k',
          type: 'buff',
          name: '速度大幅提升',
          effect: '速度提升45%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_speed_up2_keep.png',
          },
        },
        {
          _id: '46',
          id: '46',
          type: 'buff',
          name: '技能傷害無效',
          effect: '使技能造成的傷害無效。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_endure.png',
          },
        },
        {
          _id: '46k',
          id: '46k',
          type: 'buff',
          name: '技能傷害無效',
          effect: '使技能造成的傷害無效化。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_endure_keep.png',
          },
        },
        {
          _id: '47',
          id: '47',
          type: 'buff',
          name: '狂暴化階段1',
          effect: '攻擊力、防禦力提升20%，速度提升10%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_1.png',
          },
        },
        {
          _id: '48',
          id: '48',
          type: 'buff',
          name: '狂暴化階段2',
          effect: '攻擊力、防禦力提升40%，速度提升15%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_2.png',
          },
        },
        {
          _id: '49',
          id: '49',
          type: 'buff',
          name: '狂暴化階段3',
          effect: '攻擊力、防禦力提升80%，速度提升20%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_3.png',
          },
        },
        {
          _id: '4k',
          id: '4k',
          type: 'buff',
          name: '暴擊率增加',
          effect: '暴擊率增加50%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_cri_up_keep.png',
          },
        },
        {
          _id: '5',
          id: '5',
          type: 'buff',
          name: '防護罩',
          effect: '受到傷害時，會代替生命力吸收部分的傷害。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_protect.png',
          },
        },
        {
          _id: '50',
          id: '50',
          type: 'buff',
          name: '狂暴化階段4',
          effect: '攻擊力、防禦力提升120%，速度提升30%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_4.png',
          },
        },
        {
          _id: '55',
          id: '55',
          type: 'buff',
          name: '激怒',
          effect: '防禦力及效果抗性增加30%。激怒不會被解除強化。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_madness.png',
          },
        },
        {
          _id: '57',
          id: '57',
          type: 'buff',
          name: '效果抗性增加',
          effect: '效果抗性增加50%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_res_inc.png',
          },
        },
        {
          _id: '57k',
          id: '57k',
          type: 'buff',
          name: '效果抗性增加',
          effect: '效果抗性增加50%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_res_inc_keep.png',
          },
        },
        {
          _id: '59',
          id: '59',
          type: 'buff',
          name: '心眼',
          effect: '效果命中和效果抗性增加30%。心眼無法被解除強化。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_wildeye.png',
          },
        },
        {
          _id: '5k',
          id: '5k',
          type: 'buff',
          name: '防護罩',
          effect:
            '受到傷害時，吸收一定量的傷害取代生命力的損失。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_protect_keep.png',
          },
        },
        {
          _id: '6',
          id: '6',
          type: 'buff',
          name: '無敵',
          effect: '受到的所有傷害無效。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_invincible.png',
          },
        },
        {
          _id: '60',
          id: '60',
          type: 'buff',
          name: '效果命中增加',
          effect: '效果命中增加50％。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_acc_up.png',
          },
        },
        {
          _id: '60k',
          id: '60k',
          type: 'buff',
          name: '效果命中增加',
          effect: '效果命中增加50%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_acc_up_keep.png',
          },
        },
        {
          _id: '62',
          id: '62',
          type: 'buff',
          name: '防禦力大幅增加',
          effect: '防禦力增加80%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_up2.png',
          },
        },
        {
          _id: '62k',
          id: '62k',
          type: 'buff',
          name: '防禦力大幅增加',
          effect: '防禦力增加75%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_up2_keep.png',
          },
        },
        {
          _id: '67',
          id: '67',
          type: 'buff',
          name: '妄想',
          effect:
            '攻擊時，使目標在1回合內產生1個隨機弱化效果。妄想無法被解除強化。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_delusion_keep.png',
          },
        },
        {
          _id: '6k',
          id: '6k',
          type: 'buff',
          name: '無敵',
          effect: '使所有傷害無效化。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_invincible_keep.png',
          },
        },
        {
          _id: '7',
          id: '7',
          type: 'buff',
          name: '反擊',
          effect:
            '目標受擊時，立刻以基本技能攻擊攻擊自己的目標。但在追加攻擊或反擊時則不會觸發。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_counter.png',
          },
        },
        {
          _id: '7k',
          id: '7k',
          type: 'buff',
          name: '反擊',
          effect:
            '受擊時立刻用基本技能攻擊回擊。不會因為追加攻擊、反擊而發動。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_counter_keep.png',
          },
        },
        {
          _id: '8',
          id: '8',
          type: 'buff',
          name: '再生',
          effect: '受擊時，將恢復最大生命力的5%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bless.png',
          },
        },
        {
          _id: '8k',
          id: '8k',
          type: 'buff',
          name: '再生',
          effect: '受擊時恢復最大生命力的5%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bless_keep.png',
          },
        },
        {
          _id: '9',
          id: '9',
          type: 'buff',
          name: '暴擊傷害增加',
          effect: '暴擊傷害增加50%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_cridmg_up.png',
          },
        },
        {
          _id: '9k',
          id: '9k',
          type: 'buff',
          name: '暴擊傷害增加',
          effect: '暴擊傷害增加50%。不受強化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_cridmg_up_keep.png',
          },
        },
        {
          _id: 'aby0915',
          id: 'aby091_5',
          type: 'buff',
          name: '隨機強化效果',
          effect: '無法被解除的攻擊力增加、暴擊率增加、暴擊傷害增加',
          assets: { icon: null },
        },
        {
          _id: 'aby101berserk',
          id: 'aby101_berserk',
          type: 'buff',
          name: '狂暴化',
          effect: '攻擊力與速度大幅增加。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_4_aura.png',
          },
        },
        {
          _id: 'aby102buffdelaura',
          id: 'aby102_buffdelaura',
          type: 'buff',
          name: '強化抑制光環',
          effect:
            '敵人之中有人回合開始時，使目標的強化效果減少1回合。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'aby102first',
          id: 'aby102_first',
          type: 'buff',
          name: '戰鬥架勢第1階段',
          effect:
            '使用閃光時，攻擊攻擊力最高的敵人。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_buff_one_aura.png',
          },
        },
        {
          _id: 'aby102healaura',
          id: 'aby102_healaura',
          type: 'buff',
          name: '自動恢復光環',
          effect:
            '我軍回合開始時，使目標的生命力恢復。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_heal_aura.png',
          },
        },
        {
          _id: 'aby102second',
          id: 'aby102_second',
          type: 'buff',
          name: '戰鬥架勢第2階段',
          effect:
            '使用閃光時，攻擊隨機目標。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_buff_two_aura.png',
          },
        },
        {
          _id: 'aby102third',
          id: 'aby102_third',
          type: 'buff',
          name: '戰鬥架勢第3階段',
          effect:
            '使用閃光時，攻擊最大生命力最高的敵人。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_buff_three_aura.png',
          },
        },
        {
          _id: 'aby104berserk',
          id: 'aby104_berserk',
          type: 'buff',
          name: '狂暴化',
          effect:
            '受擊時速攻值增加15%，攻擊力重疊增加。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_4_aura.png',
          },
        },
        {
          _id: 'aby106berserk',
          id: 'aby106_berserk',
          type: 'buff',
          name: '暴走',
          effect:
            '受到暴擊攻擊時，以25%的機率使自己產生追加回合。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_madness_aura.png',
          },
        },
        {
          _id: 'aby108reaper',
          id: 'aby108_reaper',
          type: 'buff',
          name: '死神的權能',
          effect:
            '攻擊後若消滅敵人的話，造成滅亡。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bless_aura.png',
          },
        },
        {
          _id: 'aby109cure',
          id: 'aby109_cure',
          type: 'buff',
          name: '治癒之手',
          effect:
            '根據傷害量等比恢復自己的生命力。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_heal_aura.png',
          },
        },
        {
          _id: 'bansheehide',
          id: 'banshee_hide',
          type: 'buff',
          name: '靈魂帷幕',
          effect: '將不會成為攻擊對象，且不會受到傷害。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_con_up.png',
          },
        },
        {
          _id: 'buff12r1',
          id: 'buff12_r1',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、無敵、迴避增加、持續恢復、免疫、反擊、不死、隱身、技能傷害無效',
          assets: { icon: null },
        },
        {
          _id: 'buff14r1',
          id: 'buff14_r1',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、無敵、暴擊傷害增加、迴避增加、持續恢復、免疫、反擊、反射、不死、隱身、甦醒',
          assets: { icon: null },
        },
        {
          _id: 'buff2r1',
          id: 'buff2_r1',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、暴擊率增加',
          assets: { icon: null },
        },
        {
          _id: 'buff2r2',
          id: 'buff2_r2',
          type: 'buff',
          name: '隨機強化效果',
          effect: '速度提升、防禦力增加',
          assets: { icon: null },
        },
        {
          _id: 'buff3r1',
          id: 'buff3_r1',
          type: 'buff',
          name: '隨機強化效果',
          effect: '速度提升、攻擊力增加、暴擊率增加',
          assets: { icon: null },
        },
        {
          _id: 'buff3r2',
          id: 'buff3_r2',
          type: 'buff',
          name: '隨機強化效果',
          effect: '防禦力增加、持續恢復、免疫',
          assets: { icon: null },
        },
        {
          _id: 'buff3r3',
          id: 'buff3_r3',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、防禦力增加、速度提升',
          assets: { icon: null },
        },
        {
          _id: 'buff3rk1',
          id: 'buff3_r_k1',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加（無法解除）、暴擊率增加（無法解除）、暴擊傷害增加（無法解除）',
          assets: { icon: null },
        },
        {
          _id: 'buff4r1',
          id: 'buff4_r1',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、防禦力增加、速度提升、暴擊率增加',
          assets: { icon: null },
        },
        {
          _id: 'buff4r2',
          id: 'buff4_r2',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、防禦力增加、速度提升、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff4r3',
          id: 'buff4_r3',
          type: 'buff',
          name: '隨機強化效果',
          effect: '防禦力增加、暴擊率增加、免疫、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff4r4',
          id: 'buff4_r4',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、防禦力增加、暴擊率增加、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff4r5',
          id: 'buff4_r5',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、防禦力增加、暴擊率增加、暴擊傷害增加',
          assets: { icon: null },
        },
        {
          _id: 'buff5r1',
          id: 'buff5_r1',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、防禦力增加、速度提升、暴擊率增加、免疫',
          assets: { icon: null },
        },
        {
          _id: 'buff5r2',
          id: 'buff5_r2',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、速度提升、暴擊率增加、免疫、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff5r3',
          id: 'buff5_r3',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、防禦力增加、速度提升、暴擊率增加、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff5r4',
          id: 'buff5_r4',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、速度提升、暴擊率增加、免疫、反射',
          assets: { icon: null },
        },
        {
          _id: 'buff5r5',
          id: 'buff5_r5',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、防禦力增加、速度提升、暴擊傷害增加、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff6r1',
          id: 'buff6_r1',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、防禦力增加、速度提升、暴擊率增加、免疫、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff6r2',
          id: 'buff6_r2',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、暴擊抗性增加、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff6r3',
          id: 'buff6_r3',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、速度提升、暴擊率增加、免疫、攻擊力大幅增加、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff6r4',
          id: 'buff6_r4',
          type: 'buff',
          name: '隨機強化效果',
          effect: '暴擊率增加、持續恢復、隱身、甦醒、效果抗性增加、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff6r5',
          id: 'buff6_r5',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、暴擊抗性增加、攻擊力大幅增加',
          assets: { icon: null },
        },
        {
          _id: 'buff6rk1',
          id: 'buff6_r_k1',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加（無法解除）、防禦力增加（無法解除）、速度提升（無法解除）、暴擊率增加（無法解除）、效果抗性增加（無法解除）、效果命中增加（無法解除）',
          assets: { icon: null },
        },
        {
          _id: 'buff7r1',
          id: 'buff7_r1',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、迴避增加、持續恢復、免疫',
          assets: { icon: null },
        },
        {
          _id: 'buff7r2',
          id: 'buff7_r2',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、迴避增加、持續恢復、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff7r3',
          id: 'buff7_r3',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、持續恢復、暴擊抗性增加、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff8r1',
          id: 'buff8_r1',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、暴擊率增加、免疫、速度提升、甦醒、反擊',
          assets: { icon: null },
        },
        {
          _id: 'buff8r2',
          id: 'buff8_r2',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、持續恢復、免疫、隱身、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff8r3',
          id: 'buff8_r3',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、迴避增加、持續恢復、免疫、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff8r4',
          id: 'buff8_r4',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、防禦力增加、速度提升、暴擊率增加、暴擊傷害增加、迴避增加、免疫、防護罩',
          assets: { icon: null },
        },
        {
          _id: 'buff8r5',
          id: 'buff8_r5',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '防禦力增加、暴擊率增加、暴擊傷害增加、迴避增加、恢復、免疫、攻擊力大幅增加',
          assets: { icon: null },
        },
        {
          _id: 'c1054r',
          id: 'c1054_r',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力大幅增加、暴擊率增加、 暴擊傷害增加、防禦力增加、持續恢復、迴避增加、弱化免疫。',
          assets: { icon: null },
        },
        {
          _id: 'c1054repi009',
          id: 'c1054_r_epi009',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、速度提升、暴擊率增加、暴擊傷害增加、防禦力增加、防護罩、弱化免疫',
          assets: { icon: null },
        },
        {
          _id: 'c1097for007fury',
          id: 'c1097_for007_fury',
          type: 'buff',
          name: '激怒',
          effect:
            '攻擊力、防禦力、速度增加20%。受擊時，若受到暴擊攻擊3次的話，則會解除。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_madness_aura.png',
          },
        },
        {
          _id: 'c1106r',
          id: 'c1106_r',
          type: 'buff',
          name: '隨機強化效果',
          effect: '攻擊力增加、效果命中增加、防禦力增加、持續恢復、弱化免疫',
          assets: { icon: null },
        },
        {
          _id: 'c2017r',
          id: 'c2017_r',
          type: 'buff',
          name: '隨機強化效果',
          effect:
            '攻擊力增加、速度提升、暴擊率增加、持續恢復、防禦力增加、防護罩、迴避增加、弱化免疫',
          assets: { icon: null },
        },
        {
          _id: 'c2036r',
          id: 'c2036_r',
          type: 'buff',
          name: '職類強化效果',
          effect:
            '盜賊、戰士、射手、魔導士：增加暴擊抗性\n騎士、精靈師：防護罩\n防護罩將根據施展者的最大生命力等比增加。',
          assets: { icon: null },
        },
        {
          _id: 'con016rage',
          id: 'con016_rage',
          type: 'buff',
          name: '狂暴化',
          effect: '每當受擊時，自己的攻擊力及速度重疊增加。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_3.png',
          },
        },
        {
          _id: 'dra009rage1',
          id: 'dra009_rage1',
          type: 'buff',
          name: '狂暴化階段1',
          effect: '攻擊力增加10%、防禦力增加5%，速度提升8%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_1.png',
          },
        },
        {
          _id: 'dra009rage2',
          id: 'dra009_rage2',
          type: 'buff',
          name: '狂暴化階段2',
          effect: '攻擊力增加20%、防禦力增加10%，速度提升16%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_2.png',
          },
        },
        {
          _id: 'dra009rage3',
          id: 'dra009_rage3',
          type: 'buff',
          name: '狂暴化階段3',
          effect: '攻擊力增加30%、防禦力增加15%，速度提升24%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_3.png',
          },
        },
        {
          _id: 'dra009rage4',
          id: 'dra009_rage4',
          type: 'buff',
          name: '狂暴化階段4',
          effect: '攻擊力增加50%、防禦力增加20%，速度提升32%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_4.png',
          },
        },
        {
          _id: 'for006rage',
          id: 'for006_rage',
          type: 'buff',
          name: '狂暴化',
          effect: '受擊後使速攻值增加15%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_4_aura.png',
          },
        },
        {
          _id: 'lfn002dmgdn',
          id: 'lfn002_dmgdn',
          type: 'buff',
          name: '傷害減少',
          effect:
            '防禦力增加15%，且受到的傷害減少35%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_up_aura.png',
          },
        },
        {
          _id: 'm9052bubble',
          id: 'm9052_bubble',
          type: 'buff',
          name: '空氣泡泡',
          effect: '速度增加20%，受擊4次時解除效果。不受解除強化效果的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bubble.png',
          },
        },
        {
          _id: 'm9193manacystal',
          id: 'm9193_manacystal',
          type: 'buff',
          name: '魔力結晶',
          effect:
            '攻擊時，傷害量和暴擊率增加20%，最多重疊3次。不受解除強化效果的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_inc_keep.png',
          },
        },
        {
          _id: 'm9202angry',
          id: 'm9202_angry',
          type: 'buff',
          name: '暴走',
          effect:
            '回合結束時，使自己現有的生命力減少，並使自己的暴擊機率及速度重疊增加。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_madness.png',
          },
        },
        {
          _id: 'restoremije002',
          id: 'restore_mije002',
          type: 'buff',
          name: '治癒',
          effect: '受擊時恢復生命力。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_restore.png',
          },
        },
        {
          _id: 'swordmanlnmdic0043',
          id: 'swordman_l_n_mdic004_3',
          type: 'buff',
          name: '忠誠的吶喊',
          effect: '自己的回合開始時，解除隨機1名敵人的1個強化效果。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_curtain.png',
          },
        },
        {
          _id: 'wip010rage',
          id: 'wip010_rage',
          type: 'buff',
          name: '狂暴化',
          effect: '攻擊力增加30%，速度提升15%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_4.png',
          },
        },
        {
          _id: '12a',
          id: '12a',
          type: 'common',
          name: '免疫',
          effect:
            '不會獲得任何弱化效果和部分有害效果。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_debuf_impossible_aura.png',
          },
        },
        {
          _id: '14a',
          id: '14a',
          type: 'common',
          name: '不死',
          effect: '在持續回合內不會死亡。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_immortality_aura.png',
          },
        },
        {
          _id: '15a',
          id: '15a',
          type: 'common',
          name: '隱身',
          effect:
            '如果有其他我軍的話，不會成為攻擊目標。受到廣域攻擊時，受到的傷害會減少，受到傷害時則會解除。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_hide_aura.png',
          },
        },
        {
          _id: '17a',
          id: '17a',
          type: 'common',
          name: '攻擊力減少',
          effect: '攻擊力減少50%。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_dn_aura.png',
          },
        },
        {
          _id: '18a',
          id: '18a',
          type: 'common',
          name: '防禦力減少',
          effect: '防禦力減少70%。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_dn_aura.png',
          },
        },
        {
          _id: '19a',
          id: '19a',
          type: 'common',
          name: '速度下降',
          effect: '速度下降30%。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_speed_dn_aura.png',
          },
        },
        {
          _id: '1a',
          id: '1a',
          type: 'common',
          name: '攻擊力增加',
          effect: '攻擊力增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_up_aura.png',
          },
        },
        {
          _id: '20a',
          id: '20a',
          type: 'common',
          name: '暈眩',
          effect:
            '持續回合期間內無法行動。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_stun_aura.png',
          },
        },
        {
          _id: '230kmission',
          id: '230k_mission',
          type: 'common',
          name: '束縛',
          effect:
            '除了根據速度而變的速攻值增加效果之外，無法獲得速攻值增加效果。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_ab_up_block_aura.png',
          },
        },
        {
          _id: '28a',
          id: '28a',
          type: 'common',
          name: '沉默',
          effect:
            '無法使用有冷卻時間的技能。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_silence_aura.png',
          },
        },
        {
          _id: '29a',
          id: '29a',
          type: 'common',
          name: '無法強化',
          effect: '無法獲得任何強化效果。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_buf_impossible_aura.png',
          },
        },
        {
          _id: '33',
          id: '33',
          type: 'common',
          name: '夾攻',
          effect:
            '其他我軍以基本技能進行攻擊時，自己在可行動的狀態下，使用基本技能攻擊相同目標。\n反擊時不會發生。',
          assets: { icon: null },
        },
        {
          _id: '34',
          id: '34',
          type: 'common',
          name: '貫穿',
          effect: '無視防禦力給予傷害。',
          assets: { icon: null },
        },
        {
          _id: '35',
          id: '35',
          type: 'common',
          name: '追加回合',
          effect: '目標變得可以再行動一次。',
          assets: { icon: null },
        },
        {
          _id: '36',
          id: '36',
          type: 'common',
          name: '轉移',
          effect: '將會轉移弱化效果給其他的目標。',
          assets: { icon: null },
        },
        {
          _id: '37',
          id: '37',
          type: 'common',
          name: '護衛',
          effect: '受到的傷害量將會轉移給施展者。',
          assets: { icon: null },
        },
        {
          _id: '44a',
          id: '44a',
          type: 'common',
          name: '攻擊力大幅增加',
          effect: '攻擊力增加75%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_up2_aura.png',
          },
        },
        {
          _id: '51',
          id: '51',
          type: 'common',
          name: '激爆',
          effect:
            '使指定的持續傷害立即發動造成傷害。根據回合數等比增加傷害量。',
          assets: { icon: null },
        },
        {
          _id: '52',
          id: '52',
          type: 'common',
          name: '滅亡',
          effect: '因此技能死亡的目標無法復活。',
          assets: { icon: null },
        },
        {
          _id: '53aby098',
          id: '53_aby098',
          type: 'common',
          name: '特製炸彈',
          effect:
            '持續回合結束時受到傷害，在1回合內陷入暈眩狀態。不會受到針對弱化效果的各種效果影響。 每次因為特製炸彈受到傷害時，防禦力減少。此效果只會因為暗之可萊因奧德而解除。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bomb_aura.png',
          },
        },
        {
          _id: '56',
          id: '56',
          type: 'common',
          name: '減少靈魂',
          effect: '減少靈魂。不會受到命中及效果抗性的影響。',
          assets: { icon: null },
        },
        {
          _id: '62a',
          id: '62a',
          type: 'common',
          name: '防禦力大幅增加',
          effect: '防禦力增加80%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_up2_aura.png',
          },
        },
        {
          _id: '63',
          id: '63',
          type: 'common',
          name: '狂暴化',
          effect: '攻擊時必定能消滅敵人。',
          assets: { icon: null },
        },
        {
          _id: '64',
          id: '64',
          type: 'common',
          name: '傷口',
          effect:
            '最大生命力累積減少。只會套用於英雄，最多累積至50%。不受命中和效果抗性的影響。',
          assets: { icon: null },
        },
        {
          _id: '6a',
          id: '6a',
          type: 'common',
          name: '無敵',
          effect: '使所有傷害無效化。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_invincible_aura.png',
          },
        },
        {
          _id: '7a',
          id: '7a',
          type: 'common',
          name: '反擊',
          effect:
            '受擊時，立刻使用基本技能回擊攻擊自己的目標。不會因為追加攻擊、反擊而發動。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_counter_aura.png',
          },
        },
        {
          _id: 'aby0984',
          id: 'aby098_4',
          type: 'common',
          name: '特製炸彈',
          effect:
            '在持續回合結束時受到傷害，在1回合內呈現暈眩狀態。不受解除強化效果、延長/減少持續回合的影響。每當受到特製炸彈的傷害時，防禦力減少。該效果只能透過暗之可萊因奧德來解除。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bomb_aura.png',
          },
        },
        {
          _id: 'berserkcle009',
          id: 'berserk_cle009',
          type: 'common',
          name: '暴走',
          effect:
            '攻擊力和速度重疊增加，有人回合結束時速攻值增加15%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_madness_aura.png',
          },
        },
        {
          _id: 'berserkdis010',
          id: 'berserk_dis010',
          type: 'common',
          name: '暴走',
          effect:
            '回合結束時，使目前的生命力減少，攻擊力和速度重疊增加。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_madness_aura.png',
          },
        },
        {
          _id: 'blasselite',
          id: 'blass_elite',
          type: 'common',
          name: '異界之力',
          effect:
            '死亡時，使全體敵人產生特殊效果。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'bubblemdic005',
          id: 'bubble_mdic005',
          type: 'common',
          name: '空氣泡泡',
          effect:
            '速度增加20%，且每當受擊4次時則會解除。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bubble_aura.png',
          },
        },
        {
          _id: 'c1112epi009',
          id: 'c1112_epi009',
          type: 'common',
          name: '平靜',
          effect: '可以使用平靜。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_con_up_aura.png',
          },
        },
        {
          _id: 'cs22gemwnmission1',
          id: 'cs2_2_gem_w_n_mission1',
          type: 'common',
          name: '免疫',
          effect:
            '不會獲得任何弱化效果和部分有害效果。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_debuf_impossible_aura.png',
          },
        },
        {
          _id: 'cs3csdemonmlidmission',
          id: 'cs3_cs_demonml_i_d_mission',
          type: 'common',
          name: '戰意喪失',
          effect:
            '在持續回合內無法行動。速度減少100%，且受到的傷害量增加30%。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_lethargy_aura.png',
          },
        },
        {
          _id: 'cs3undeadcmwbmission',
          id: 'cs3_undeadcm_w_b_mission',
          type: 'common',
          name: '神經毒',
          effect:
            '回合開始時，受到相當於自己目前生命力90%的傷害。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_neurotoxin_aura.png',
          },
        },
        {
          _id: 'cs5att',
          id: 'cs5_att',
          type: 'common',
          name: '攻擊架勢',
          effect:
            '攻擊力、暴擊率、暴擊傷害增加，防禦力減少。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_inc_aura.png',
          },
        },
        {
          _id: 'cs6undeadcmwbmission',
          id: 'cs6_undeadcm_w_b_mission',
          type: 'common',
          name: '免疫劑',
          effect:
            '在持續回合內對神經毒免疫。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_medicine_aura.png',
          },
        },
        {
          _id: 'deathstigma',
          id: 'death_stigma',
          type: 'common',
          name: '死亡烙印',
          effect:
            '持續回合結束時，解除所有的強化效果後死亡。只會在施展者死亡時被解除。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_explosion_aura.png',
          },
        },
        {
          _id: 'debuffchimaerafbmission',
          id: 'debuff_chimaera_f_b_mission',
          type: 'common',
          name: '沉默',
          effect:
            '無法使用有冷卻時間的技能。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_silence_aura.png',
          },
        },
        {
          _id: 'dmgdn80',
          id: 'dmgdn_80',
          type: 'common',
          name: '傷害減少',
          effect: '受到的傷害減少80%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_up_aura.png',
          },
        },
        {
          _id: 'dmgdn90',
          id: 'dmgdn_90',
          type: 'common',
          name: '傷害減少',
          effect: '受到的傷害減少90%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_up_aura.png',
          },
        },
        {
          _id: 'elementaliconmissiondcs1',
          id: 'elemental_icon_mission_d_cs1',
          type: 'common',
          name: '屬性強化',
          effect:
            '進行攻擊時，目標為光明屬性的話，傷害量增加20%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissiondcs2',
          id: 'elemental_icon_mission_d_cs2',
          type: 'common',
          name: '屬性強化',
          effect:
            '進行攻擊時，目標為光明屬性的話，傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissiondcs3',
          id: 'elemental_icon_mission_d_cs3',
          type: 'common',
          name: '屬性強化',
          effect:
            '進行攻擊時，目標為光明屬性的話，傷害量增加80%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissionfcs1',
          id: 'elemental_icon_mission_f_cs1',
          type: 'common',
          name: '屬性強化',
          effect:
            '攻擊時目標為非火焰屬性的話，傷害量增加80%。受擊時，攻擊者為火焰屬性的話，受到的傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissionfcs2',
          id: 'elemental_icon_mission_f_cs2',
          type: 'common',
          name: '屬性強化',
          effect:
            '攻擊時目標為非火焰屬性的話，傷害量增加50%。受擊時，攻擊者為火焰屬性的話，受到的傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissionfcs3',
          id: 'elemental_icon_mission_f_cs3',
          type: 'common',
          name: '屬性強化',
          effect:
            '攻擊時目標為非火焰屬性的話，傷害量增加20%。受擊時，攻擊者為火焰屬性的話，受到的傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissionics1',
          id: 'elemental_icon_mission_i_cs1',
          type: 'common',
          name: '屬性強化',
          effect:
            '攻擊時目標為非寒氣屬性的話，傷害量增加80%。受擊時，攻擊者為寒氣屬性的話，受到的傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissionics2',
          id: 'elemental_icon_mission_i_cs2',
          type: 'common',
          name: '屬性強化',
          effect:
            '攻擊時目標為非寒氣屬性的話，傷害量增加50%。受擊時，攻擊者為寒氣屬性的話，受到的傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissionics3',
          id: 'elemental_icon_mission_i_cs3',
          type: 'common',
          name: '屬性強化',
          effect:
            '攻擊時目標為非寒氣屬性的話，傷害量增加20%。受擊時，攻擊者為寒氣屬性的話，受到的傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissionwcs1',
          id: 'elemental_icon_mission_w_cs1',
          type: 'common',
          name: '屬性強化',
          effect:
            '攻擊時目標為非自然屬性的話，傷害量增加80%。受擊時，攻擊者為自然屬性的話，受到的傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissionwcs2',
          id: 'elemental_icon_mission_w_cs2',
          type: 'common',
          name: '屬性強化',
          effect:
            '攻擊時目標為非自然屬性的話，傷害量增加50%。受擊時，攻擊者為自然屬性的話，受到的傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'elementaliconmissionwcs3',
          id: 'elemental_icon_mission_w_cs3',
          type: 'common',
          name: '屬性強化',
          effect:
            '攻擊時目標為非自然屬性的話，傷害量增加20%。受擊時，攻擊者為自然屬性的話，受到的傷害量增加50%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'firstmpao002',
          id: 'first_mpao002',
          type: 'common',
          name: '攻擊次數1',
          effect:
            '顯示的數字為1以下時，可以使用指定技能。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_buff_one_aura.png',
          },
        },
        {
          _id: 'hunbhide',
          id: 'hunb_hide',
          type: 'common',
          name: '靈魂帷幕',
          effect:
            '不會變成攻擊目標，且不會受到任何傷害。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_curtain_aura.png',
          },
        },
        {
          _id: 'hunqdmgdn',
          id: 'hunq_dmgdn',
          type: 'common',
          name: '傷害減少',
          effect:
            '受到單一攻擊時，受到的傷害減少80%。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_up_aura.png',
          },
        },
        {
          _id: 'mecamission',
          id: 'meca_mission',
          type: 'common',
          name: '負荷電流',
          effect:
            '回合結束時，對全體我軍各造成最大生命力等比的傷害。使用非攻擊的技能時即被解除。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_loadcurrent_aura.png',
          },
        },
        {
          _id: 'pa42csdemontkmznet',
          id: 'pa4_2_cs_demontk_mznet',
          type: 'common',
          name: '危險度',
          effect:
            '受擊時，所受到的傷害量增加相當於危險度階段x10%。危險度在死亡時仍會維持。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_danger_1_aura.png',
          },
        },
        {
          _id: 'pa4csdemontkmznet',
          id: 'pa4_cs_demontk_mznet',
          type: 'common',
          name: '危險度',
          effect:
            '受擊時，所受到的傷害量增加相當於危險度階段x10%。若是第3階段以上時，被卡戴斯攻擊後，將會受到危險度階段x最大生命力等比的傷害。危險度在死亡時仍會維持。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_danger_1_aura.png',
          },
        },
        {
          _id: 'rageattspdup',
          id: 'rage_attspd_up',
          type: 'common',
          name: '狂暴化',
          effect:
            '受擊時，攻擊力和速度重疊增加。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_rage_4_aura.png',
          },
        },
        {
          _id: 'stunnotdead',
          id: 'stun_notdead',
          type: 'common',
          name: '無法行動',
          effect:
            '持續回合期間內無法行動，不會死亡。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_stun_aura.png',
          },
        },
        {
          _id: 'threempao002',
          id: 'three_mpao002',
          type: 'common',
          name: '攻擊次數3',
          effect:
            '顯示的數字為1以下時，可以使用指定技能。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_buff_three_aura.png',
          },
        },
        {
          _id: 'twompao002',
          id: 'two_mpao002',
          type: 'common',
          name: '攻擊次數2',
          effect:
            '顯示的數字為1以下時，可以使用指定技能。不會受到針對強化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_buff_two_aura.png',
          },
        },
        {
          _id: '17',
          id: '17',
          type: 'debuff',
          name: '攻擊力減少',
          effect: '攻擊力減少50%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_dn.png',
          },
        },
        {
          _id: '17k',
          id: '17k',
          type: 'debuff',
          name: '攻擊力減少',
          effect: '攻擊力減少50%。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_att_dn_keep.png',
          },
        },
        {
          _id: '18',
          id: '18',
          type: 'debuff',
          name: '防禦力減少',
          effect: '防禦力減少70%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_dn.png',
          },
        },
        {
          _id: '18k',
          id: '18k',
          type: 'debuff',
          name: '防禦力減少',
          effect: '防禦力減少70%。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_def_dn_keep.png',
          },
        },
        {
          _id: '19',
          id: '19',
          type: 'debuff',
          name: '速度下降',
          effect: '速度減少30%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_speed_dn.png',
          },
        },
        {
          _id: '19k',
          id: '19k',
          type: 'debuff',
          name: '速度下降',
          effect: '速度下降30%。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_speed_dn_keep.png',
          },
        },
        {
          _id: '20',
          id: '20',
          type: 'debuff',
          name: '暈眩',
          effect: '在持續回合內無法行動。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_stun.png',
          },
        },
        {
          _id: '20k',
          id: '20k',
          type: 'debuff',
          name: '暈眩',
          effect: '持續回合期間內無法行動。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_stun_keep.png',
          },
        },
        {
          _id: '21',
          id: '21',
          type: 'debuff',
          name: '睡眠',
          effect:
            '在持續回合內無法行動。暴擊抗性減少100%，受到攻擊造成的傷害時則會解除。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_sleep.png',
          },
        },
        {
          _id: '21a',
          id: '21a',
          type: 'debuff',
          name: '睡眠',
          effect:
            '持續回合期間內無法行動。暴擊抗性減少100%，若因為受擊而受到傷害的話則會解除。不受任何針對弱化效果的效果所影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_sleep_aura.png',
          },
        },
        {
          _id: '21k',
          id: '21k',
          type: 'debuff',
          name: '睡眠',
          effect:
            '在持續回合內無法行動。暴擊抗性減少100%，受到攻擊造成的傷害時則會解除。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_sleep_keep.png',
          },
        },
        {
          _id: '22',
          id: '22',
          type: 'debuff',
          name: '命中率減少',
          effect: '命中率減少50%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_blind.png',
          },
        },
        {
          _id: '22k',
          id: '22k',
          type: 'debuff',
          name: '命中率減少',
          effect: '命中減少50%。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_blind_keep.png',
          },
        },
        {
          _id: '23',
          id: '23',
          type: 'debuff',
          name: '吸血之手',
          effect: '目標受擊時，攻擊者將會恢復最大生命力的10%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_vampire.png',
          },
        },
        {
          _id: '23k',
          id: '23k',
          type: 'debuff',
          name: '吸血之手',
          effect: '受擊時使攻擊者恢復最大生命力的10%。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_vampire_keep.png',
          },
        },
        {
          _id: '24',
          id: '24',
          type: 'debuff',
          name: '中毒',
          effect: '目標在回合開始時將會受到最大生命力5%的傷害。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_dot.png',
          },
        },
        {
          _id: '24k',
          id: '24k',
          type: 'debuff',
          name: '中毒',
          effect: '回合開始時受到最大生命力5%的傷害。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_dot_keep.png',
          },
        },
        {
          _id: '25',
          id: '25',
          type: 'debuff',
          name: '挑釁',
          effect: '回合開始時，會被迫向施展挑釁的目標使用基本技能。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_provoke.png',
          },
        },
        {
          _id: '25k',
          id: '25k',
          type: 'debuff',
          name: '挑釁',
          effect:
            '回合開始時對強制挑釁的目標使用基本技能。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_provoke_keep.png',
          },
        },
        {
          _id: '26',
          id: '26',
          type: 'debuff',
          name: '標靶',
          effect: '受到的傷害量增加15%，迴避減少15%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_target.png',
          },
        },
        {
          _id: '26k',
          id: '26k',
          type: 'debuff',
          name: '標靶',
          effect: '受到的傷害量增加15%，迴避減少15%。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_target_keep.png',
          },
        },
        {
          _id: '27',
          id: '27',
          type: 'debuff',
          name: '無法恢復',
          effect: '目標無法恢復生命力。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_heal_impossible.png',
          },
        },
        {
          _id: '27k',
          id: '27k',
          type: 'debuff',
          name: '無法恢復',
          effect: '無法獲得生命力恢復效果。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_heal_impossible_keep.png',
          },
        },
        {
          _id: '28',
          id: '28',
          type: 'debuff',
          name: '沉默',
          effect: '目標無法使用有冷卻時間的技能。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_silence.png',
          },
        },
        {
          _id: '28k',
          id: '28k',
          type: 'debuff',
          name: '沉默',
          effect: '無法使用有冷卻時間的技能。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_silence_keep.png',
          },
        },
        {
          _id: '29',
          id: '29',
          type: 'debuff',
          name: '無法強化',
          effect: '目標將無法獲得任何強化效果。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_buf_impossible.png',
          },
        },
        {
          _id: '29k',
          id: '29k',
          type: 'debuff',
          name: '無法強化',
          effect: '無法獲得所有的強化效果。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_buf_impossible_keep.png',
          },
        },
        {
          _id: '30',
          id: '30',
          type: 'debuff',
          name: '魔法釘',
          effect:
            '目標受擊時，將受到最大生命力2%的傷害，並以25%的機率在1回合內暈眩。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_nail.png',
          },
        },
        {
          _id: '30k',
          id: '30k',
          type: 'debuff',
          name: '魔法釘',
          effect:
            '受擊時，將受到最大生命力2%的傷害，以25%的機率在1回合內暈眩。不受解除弱化效果的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_nail_keep.png',
          },
        },
        {
          _id: '31',
          id: '31',
          type: 'debuff',
          name: '燒傷',
          effect: '回合開始時，根據施展者的攻擊力受到等比的巨大傷害。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_blaze.png',
          },
        },
        {
          _id: '31k',
          id: '31k',
          type: 'debuff',
          name: '燒傷',
          effect:
            '回合開始時，根據施展者的攻擊力等比受到巨大傷害。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_blaze_keep.png',
          },
        },
        {
          _id: '32',
          id: '32',
          type: 'debuff',
          name: '出血',
          effect: '回合開始時，根據施展者的攻擊力受到等比傷害。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_blood.png',
          },
        },
        {
          _id: '32k',
          id: '32k',
          type: 'debuff',
          name: '出血',
          effect:
            '回合開始時，根據施展者的攻擊力等比受到傷害。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_blood_keep.png',
          },
        },
        {
          _id: '53',
          id: '53',
          type: 'debuff',
          name: '炸彈',
          effect:
            '持續回合結束時，根據施展者的攻擊力等比受到傷害，在1回合內陷入暈眩的狀態。不會受到持續回合延長或縮短的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bomb.png',
          },
        },
        {
          _id: '53k',
          id: '53k',
          type: 'debuff',
          name: '炸彈',
          effect:
            '持續回合結束時，根據施展者的攻擊力等比受到傷害，在1回合內陷入無法行動的狀態。不會受到持續回合延長/縮短的影響。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_bomb_keep.png',
          },
        },
        {
          _id: '54',
          id: '54',
          type: 'debuff',
          name: '詛咒',
          effect:
            '我軍被單一攻擊擊中時，自己也會追加受到部分的傷害量。追加傷害在回合結束時產生。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_curse2.png',
          },
        },
        {
          _id: '54k',
          id: '54k',
          type: 'debuff',
          name: '詛咒',
          effect:
            '我軍被單一攻擊擊中時，自己也會追加受到部分的傷害量。追加傷害在回合結束時產生。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_curse2_keep.png',
          },
        },
        {
          _id: '58',
          id: '58',
          type: 'debuff',
          name: '報喪妖后的詛咒',
          effect:
            '回合開始時，造成全體我軍根據施展者的攻擊力受到等比的巨大傷害。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_curse.png',
          },
        },
        {
          _id: '61',
          id: '61',
          type: 'debuff',
          name: '束縛',
          effect:
            '除了根據速度而變化的速攻值以外，無法再獲得速攻值增加/減少效果。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_ab_up_block.png',
          },
        },
        {
          _id: '61k',
          id: '61k',
          type: 'debuff',
          name: '束縛',
          effect:
            '除了依照速度而變化的速攻值以外，無法再獲得速攻值增加/減少的效果。不受弱化效果解除的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_ab_up_block_keep.png',
          },
        },
        {
          _id: '65',
          id: '65',
          type: 'debuff',
          name: '指定挑釁',
          effect: '回合開始時，強制對最大生命力最高的敵人使用基本技能。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_provoke_hp.png',
          },
        },
        {
          _id: '66',
          id: '66',
          type: 'debuff',
          name: '封印',
          effect: '不會發動被動技能的效果，只會套用在英雄身上。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_dizzy.png',
          },
        },
        {
          _id: 'aby0925',
          id: 'aby092_5',
          type: 'debuff',
          name: '持續傷害',
          effect: '中毒、出血、燒傷會產生持續傷害。',
          assets: { icon: null },
        },
        {
          _id: 'aby102groggy',
          id: 'aby102_groggy',
          type: 'debuff',
          name: '無法行動',
          effect:
            '持續回合期間內無法行動，不會死亡。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_stun_aura.png',
          },
        },
        {
          _id: 'aby104firecurese',
          id: 'aby104_firecurese',
          type: 'debuff',
          name: '火花詛咒',
          effect:
            '死亡時，解除全體敵人的所有強化效果後，造成強力傷害。無視效果抗性。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_curse_aura.png',
          },
        },
        {
          _id: 'aby105blackspell',
          id: 'aby105_blackspell',
          type: 'debuff',
          name: '黑之咒術',
          effect:
            '無法獲得被動、冷卻時間減少、冷卻時間重置、不產生冷卻時間的效果。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'aby105whitespell',
          id: 'aby105_whitespell',
          type: 'debuff',
          name: '白之咒術',
          effect:
            '除了根據速度而變的速攻值增加效果之外，無法獲得速攻值增加效果和追加回合效果。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_elemental_aura.png',
          },
        },
        {
          _id: 'aby107bloodcurse',
          id: 'aby107_bloodcurse',
          type: 'debuff',
          name: '血之詛咒',
          effect:
            '回合開始時，對施展者強制使用基本技能。代替承受施展者受到的所有傷害。我軍使用非攻擊的技能5次時即被解除。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_curse2_aura.png',
          },
        },
        {
          _id: 'aby110groggy',
          id: 'aby110_groggy',
          type: 'debuff',
          name: '無法行動',
          effect:
            '持續回合期間內無法行動。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_stun_aura.png',
          },
        },
        {
          _id: 'automt101',
          id: 'automt101',
          type: 'debuff',
          name: '隨機強化效果',
          effect: '攻擊力減少、命中減少、防禦力減少、速度減少、燒傷',
          assets: { icon: null },
        },
        {
          _id: 'c1044r',
          id: 'c1044_r',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '沉默、防禦力減少、攻擊力減少、無法恢復',
          assets: { icon: null },
        },
        {
          _id: 'c1053r',
          id: 'c1053_r',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '沉默、防禦力減少、攻擊力減少、無法恢復',
          assets: { icon: null },
        },
        {
          _id: 'c2111r',
          id: 'c2111_r',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、命中率減少、速度下降、無法強化',
          assets: { icon: null },
        },
        {
          _id: 'c5050r',
          id: 'c5050_r',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '沉默、防禦力減少、無法恢復',
          assets: { icon: null },
        },
        {
          _id: 'debuff3r1',
          id: 'debuff3_r1',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '防禦力減少、無法恢復、沉默',
          assets: { icon: null },
        },
        {
          _id: 'debuff3r2',
          id: 'debuff3_r2',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '中毒、出血、無法恢復',
          assets: { icon: null },
        },
        {
          _id: 'debuff4r1',
          id: 'debuff4_r1',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '防禦力減少、速度下降、中毒、無法恢復',
          assets: { icon: null },
        },
        {
          _id: 'debuff4r2',
          id: 'debuff4_r2',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、命中率減少、沉默、出血',
          assets: { icon: null },
        },
        {
          _id: 'debuff4r3',
          id: 'debuff4_r3',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、速度下降、命中率減少、中毒',
          assets: { icon: null },
        },
        {
          _id: 'debuff4r4',
          id: 'debuff4_r4',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、命中率減少、無法恢復',
          assets: { icon: null },
        },
        {
          _id: 'debuff4r5',
          id: 'debuff4_r5',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、無法恢復、沉默',
          assets: { icon: null },
        },
        {
          _id: 'debuff4r6',
          id: 'debuff4_r6',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、速度下降、命中率減少',
          assets: { icon: null },
        },
        {
          _id: 'debuff5r1',
          id: 'debuff5_r1',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、速度下降、命中率減少、燒傷',
          assets: { icon: null },
        },
        {
          _id: 'debuff5r2',
          id: 'debuff5_r2',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、無法恢復、沉默、無法強化',
          assets: { icon: null },
        },
        {
          _id: 'debuff5r3',
          id: 'debuff5_r3',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、速度下降、無法恢復、無法強化',
          assets: { icon: null },
        },
        {
          _id: 'debuff5r4',
          id: 'debuff5_r4',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、速度下降、命中率減少、無法恢復',
          assets: { icon: null },
        },
        {
          _id: 'debuff5r5',
          id: 'debuff5_r5',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '防禦力減少、速度下降、命中率減少、無法恢復、沉默',
          assets: { icon: null },
        },
        {
          _id: 'debuff5r6',
          id: 'debuff5_r6',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、速度下降、暈眩、睡眠、燒傷',
          assets: { icon: null },
        },
        {
          _id: 'debuff5r7',
          id: 'debuff5_r7',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、命中率減少、中毒、無法恢復、出血',
          assets: { icon: null },
        },
        {
          _id: 'debuff5r8',
          id: 'debuff5_r8',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、速度下降、命中率減少、中毒',
          assets: { icon: null },
        },
        {
          _id: 'debuff5r9',
          id: 'debuff5_r9',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '速度下降、命中率減少、中毒、無法恢復、出血',
          assets: { icon: null },
        },
        {
          _id: 'debuff6r1',
          id: 'debuff6_r1',
          type: 'debuff',
          name: '隨機弱化效果',
          effect:
            '攻擊力減少、防禦力減少、速度下降、命中率減少、中毒、無法強化',
          assets: { icon: null },
        },
        {
          _id: 'debuff6r2',
          id: 'debuff6_r2',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、速度下降、命中率減少、中毒、無法恢復、出血',
          assets: { icon: null },
        },
        {
          _id: 'debuff6r3',
          id: 'debuff6_r3',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、速度下降、命中率減少、無法強化、出血',
          assets: { icon: null },
        },
        {
          _id: 'debuff6r4',
          id: 'debuff6_r4',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、速度下降、命中率減少、無法恢復、沉默、無法強化',
          assets: { icon: null },
        },
        {
          _id: 'debuff6r5',
          id: 'debuff6_r5',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、中毒、無法恢復、無法強化、出血',
          assets: { icon: null },
        },
        {
          _id: 'debuff6r6',
          id: 'debuff6_r6',
          type: 'debuff',
          name: '隨機弱化效果',
          effect: '攻擊力減少、防禦力減少、速度下降、命中率減少、中毒、出血',
          assets: { icon: null },
        },
        {
          _id: 'debuff8r1',
          id: 'debuff8_r1',
          type: 'debuff',
          name: '隨機弱化效果',
          effect:
            '攻擊力減少、防禦力減少、速度下降、命中率減少、中毒、無法恢復、沉默、無法強化',
          assets: { icon: null },
        },
        {
          _id: 'debuff8r2',
          id: 'debuff8_r2',
          type: 'debuff',
          name: '隨機弱化效果',
          effect:
            '攻擊力減少、防禦力減少、速度下降、命中率減少、中毒、標靶、無法恢復、出血',
          assets: { icon: null },
        },
        {
          _id: 'debuff8r3',
          id: 'debuff8_r3',
          type: 'debuff',
          name: '隨機弱化效果',
          effect:
            '攻擊力減少、防禦力減少、速度下降、命中率減少、中毒、無法恢復、沉默、出血',
          assets: { icon: null },
        },
        {
          _id: 'dfirstmdic003',
          id: 'dfirst_mdic003',
          type: 'debuff',
          name: '冰凍精髓第1階段',
          effect:
            '被杰拉圖攻擊時，在2回合內陷入暈眩。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_debuff_one.png',
          },
        },
        {
          _id: 'dtwompao003',
          id: 'dtwo_mpao003',
          type: 'debuff',
          name: '冰凍精髓第2階段',
          effect:
            '被杰拉圖攻擊時，變更為第1階段。不會受到針對弱化效果的各種效果影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_debuff_two.png',
          },
        },
        {
          _id: 'm9193freezing',
          id: 'm9193_freezing',
          type: 'debuff',
          name: '酷寒詛咒',
          effect: '受擊後，根據最大生命力等比受到傷害，速攻值減少20%。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_freezing.png',
          },
        },
        {
          _id: 'mbkc101041',
          id: 'mbk_c1010_4_1',
          type: 'debuff',
          name: '冰凍精髓',
          effect:
            '每當遭受杰拉圖的攻擊時，標示的數字將會減少1，當標示的數字顯示為1且遭受杰拉圖的攻擊時，將會在2回合內暈眩。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_debuff_one.png',
          },
        },
        {
          _id: 'mbkc101042',
          id: 'mbk_c1010_4_2',
          type: 'debuff',
          name: '冰凍精髓',
          effect:
            '每當遭受杰拉圖的攻擊時，標示的數字將會減少1，當標示的數字顯示為1且遭受杰拉圖的攻擊時，將會在2回合內暈眩。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_debuff_two.png',
          },
        },
        {
          _id: 'notdeadstun',
          id: 'notdead_stun',
          type: 'debuff',
          name: '無法行動',
          effect:
            '持續回合期間內無法行動。不受弱化效果延長和解除之效果的影響。',
          assets: {
            icon: 'https://assets.epicsevendb.com/_source/buff/stic_debuff_one.png',
          },
        },
      ],
      roles: [
        {
          id: 'knight',
          name: 'knight',
          assets: {
            icon: 'https://assets.epicsevendb.com/class/cm_icon_role_knight.png',
          },
        },
        {
          id: 'warrior',
          name: 'warrior',
          assets: {
            icon: 'https://assets.epicsevendb.com/class/cm_icon_role_warrior.png',
          },
        },
        {
          id: 'thief',
          name: 'thief',
          assets: {
            icon: 'https://assets.epicsevendb.com/class/cm_icon_role_thief.png',
          },
        },
        {
          id: 'mage',
          name: 'mage',
          assets: {
            icon: 'https://assets.epicsevendb.com/class/cm_icon_role_mage.png',
          },
        },
        {
          id: 'soul-weaver',
          name: 'soul-weaver',
          assets: {
            icon: 'https://assets.epicsevendb.com/class/cm_icon_role_soul-weaver.png',
          },
        },
        {
          id: 'ranger',
          name: 'ranger',
          assets: {
            icon: 'https://assets.epicsevendb.com/class/cm_icon_role_ranger.png',
          },
        },
      ],
    },
    {
      delay: 10,
    }
  );
}
