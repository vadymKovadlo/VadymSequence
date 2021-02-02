class VadymsequencePackageDetectors extends DG.Package {

    //tags: semTypeDetector
    //input: column col
    //output: string semType
    detectNucleotides(col) {
        if (col.type === DG.TYPE.STRING && isNucleotide(col)){
            col.semType = 'dna_nucleotide';
            return col.semType;
        }
        return null;
    }

    //input: column col
    //output: bool result
    isNucleotide(col) {
        for (var key in col.categories) {
            if (!checkNucleotide(col.categories[key])){ return false; }
        }
        return true;
    }

    //input: string nucleotide
    //output: bool result
    checkNucleotide(nucleotide) {
        const allowed = new Set(['A','C','T','G']);
        return nucleotide.split('').every(x => allowed.has(x));
    }
}
