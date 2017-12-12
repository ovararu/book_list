import { consum } from '../consumabile';

export default function() {
  let printers = new Set();
  consum.map(printer => printers.add(printer.equipment));
  // const ppp = Array.from(printers);
  // console.log(ppp);
  let retobj = (Array.from(printers).sort().map(printer => {
    return { name: printer};
  }));

  console.log(retobj);

  return retobj;
}
