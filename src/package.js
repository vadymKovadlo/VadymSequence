/* Do not change these import lines. Datagrok will import API library in exactly the same manner */
import * as grok from 'datagrok-api/grok';
import * as ui from 'datagrok-api/ui';
import * as DG from 'datagrok-api/dg';

export let _package = new DG.Package();

//name: test
export function test() {
  grok.shell.info(_package.webRoot);
}

function complementCharacter(nucleotide_element) {
  switch (nucleotide_element) {
    case "A": return "T";
    case "T": return "A";
    case "G": return "C";
    case "C": return "G";
    default: return '';
  }
}

//name: mycomplement
//tags: panel, widgets
//input: string nucleotides {semType: dna_nucleotide} 
//output: string result {semType: dna_nucleotide} 
export function mycomplement(nucleotides) {
  return nucleotides
  .split("")
  .map(complementCharacter)
  .join("");
}

//name: getOrders
//output: dataframe df
export async function getOrders() {
  return await grok.data.query(`VadymSequence:ordersByCountry`, { country: 'USA'});
}