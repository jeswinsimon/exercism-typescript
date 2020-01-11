class Transcriptor {

    private static DNAtoRNA: { [key: string]: string } = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U',
    }
    
    toRna(dnaStrand: string): string {
        const dnaReducer = (strand: string, nucleotide: string): string => {
            if (Transcriptor.DNAtoRNA[nucleotide]) {
                return strand + Transcriptor.DNAtoRNA[nucleotide];
            }
            throw new Error("Invalid input DNA.");
        };
        return [...dnaStrand].reduce(dnaReducer, '');
    }

}

export default Transcriptor