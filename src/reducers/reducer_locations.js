import { consum } from '../consumabile';

export default function() {
  let locations = new Set();
  consum.map(location => locations.add(location.equipment));
  // const ppp = Array.from(locations);
  // console.log(ppp);
  return Array.from(locations);
}
