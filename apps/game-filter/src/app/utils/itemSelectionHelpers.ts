import { ItemSelection } from '../interfaces/selection.interface';

export function itemSelectionsToFilter(
  itemSelections: ItemSelection[],
  andOrOperator: 'and' | 'or',
  transformIdFunc?: (id: string) => any
): Record<string, any> {
  const op = andOrOperator === 'and' ? '$all' : '$in';
  const filter: { $in?: string[]; $all?: string[]; $nin?: string[] } = {
    [op]: [],
    $nin: [],
  };
  for (const sel of itemSelections) {
    const itemId = transformIdFunc ? transformIdFunc(sel.itemId) : sel.itemId;
    if (sel.isSelected) {
      if (sel.not) {
        filter.$nin?.push(itemId);
      } else {
        filter[op]?.push(itemId);
      }
    }
  }
  if (filter.$all?.length === 0 || filter.$in?.length === 0) {
    delete filter[op];
  }
  if (filter.$nin?.length === 0) {
    delete filter.$nin;
  }
  return filter;
}
