class HelloWorld {
    static hello(person?: string) {
        return 'Hello, ' + (person || 'World') + '!';
    }
}

export default HelloWorld