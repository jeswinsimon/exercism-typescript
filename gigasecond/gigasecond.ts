const gigaseconds = 1e9;

class Gigasecond {
    constructor(private readonly birthday: Date) {}

    date (): Date {
        return new Date(this.birthday.getTime() + gigaseconds * 1000);
    }

}

export default Gigasecond;