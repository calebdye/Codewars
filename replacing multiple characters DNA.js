function DNAStrand(dna){
    return dna.replace(/A/g, "t").replace(/T/g, "A").replace(/C/g, "g").replace(/G/g, "c").toUpperCase()
  }