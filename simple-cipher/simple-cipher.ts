class SimpleCipher {
    key: string;
    constructor(keyString = SimpleCipher.generateKey()) {
        this.key = SimpleCipher.validateKey(keyString);
    }

    encode(plainText: string): string {
        const mKey = SimpleCipher.getKeyForMessage(plainText, this.key);
        let encryptedArray = [...plainText].map((char, index) =>
            SimpleCipher.getCharFromCode((char.charCodeAt(0) - 97) + (mKey.charCodeAt(index) - 97)));
        return encryptedArray.join('');
    }

    decode(encryptedMessage: string): string {
        const mKey = SimpleCipher.getKeyForMessage(encryptedMessage, this.key);
        let decodedArray = [...encryptedMessage].map((char, index) =>
            SimpleCipher.getCharFromCode((char.charCodeAt(0) - 97) - (mKey.charCodeAt(index) - 97)));
        return decodedArray.join('');
    }


    /* Generate a lowercase alphabetical key of length 100 */
    private static generateKey(): string {
        return [...Array(100)].map(this.getRandomKeyChar).join('');
    }

    /* Generate a random lowercase alphabet */
    private static getRandomKeyChar(): string {
        return String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    private static validateKey(keyString: string): string {
        if (!keyString.match(/^[a-z]+$/)) {
            throw new Error('Bad key');
        }
        return keyString;
    }

    private static getCharFromCode(charCode: number): string {
        charCode = charCode % 26;
        charCode = charCode < 0 ? charCode + 26 : charCode;
        return String.fromCharCode(charCode + 97);
    }

    /* Augment key length to be greater than message length */
    private static getKeyForMessage(message: string, key: string): string {
        let mKey = key;
        while (message.length > mKey.length) {
            mKey += mKey;
        }
        return mKey;
    }
}

export default SimpleCipher
