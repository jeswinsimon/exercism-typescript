export default class Words {
    count(sentence: string): Object {
        let uniqueCounter = (counter: Map<string, number>, word: string) => counter.set(word, (counter.get(word) || 0) + 1);
        return sentence.trim().toLowerCase().split(/\s+/).reduce(uniqueCounter, new Map());
    }
}