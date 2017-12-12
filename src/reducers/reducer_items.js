import { consum } from '../consumabile';

export default function() {
  let items = new Set();
  consum.map(item => items.add(item.equipment));
  // const ppp = Array.from(items);
  // console.log(ppp);
  return Array.from(items);
}
