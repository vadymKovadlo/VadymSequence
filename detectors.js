class VadymSequencePackageDetectors extends DG.Package {
    //tags: semTypeDetector
    //input: column col
    //output: string semType
    detectNucleotides(col) {
        // let bases = ["A", "G", "C", "T"]; && bases.includes(col.categories)
        if (col.type === DG.TYPE.STRING){
            col.semType = 'dna_nucleotide';
            return col.semType;
        }
        return null;
    }
}
