const gigaseconds = 1e9;

class Gigasecond {
    birthday: Date
    constructor(birthday: Date) {
        this.birthday = birthday;
    }

    date () {
        return new Date(this.birthday.getTime() + gigaseconds * 1000);
    }

}

export default Gigasecond;