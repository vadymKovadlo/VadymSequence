class VadymsequencePackageDetectors extends DG.Package {

    //tags: semTypeDetector
    //input: column col
    //output: string semType
    detectNucleotides(col) {
        if (col.type === DG.TYPE.STRING && this.isNucleotideColumn(col)){
            col.semType = 'dna_nucleotide';
            return col.semType;
        }
        return null;
    }

    isNucleotideColumn(col) {
        for (let valueInRow of col.categories) {
            if (!this.checkWhetherItIsNucleotide(valueInRow)){ return false; }
        }
        return true;
    }

    //input: string nucleotide
    //output: bool result
    checkWhetherItIsNucleotide(inputString) {
        const dnaBases = new Set(['A','C','T','G']);
        return inputString.split('').every(x => dnaBases.has(x));
    }
}
