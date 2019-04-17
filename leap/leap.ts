function isLeapYear(year: number): Boolean {
    return !(year % 4) &&
        (!(year % 400) || Boolean(year % 100));
}

export default isLeapYear