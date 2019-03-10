export default class Words {
    count(sentence: string): Object {
        let words = sentence.trim().toLowerCase().split(/\s+/);
        let uniqueWords = new Set(words);
        let map = new Map();
        uniqueWords.forEach(word => {
            map.set(word, words.filter(w => w === word).length);
        })
        return map;
    }
}