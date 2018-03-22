/*

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side.
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

DNAStrand ("ATTGC") # return "TAACG"

DNAStrand ("GTAT") # return "CATA"

*/

function DNAStrand(dna) {
  let nucleoBasePairs = {A: "T", T: "A", G: "C", C: "G"};
  let res = "";

  for (let i = 0; i < dna.length; i++) {
    let letter = dna[i];
    let complement = nucleoBasePairs[letter];
    res += complement;
  }

  return res;
}