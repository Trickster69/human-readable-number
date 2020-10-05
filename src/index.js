module.exports = function toReadable(number) {
    const one = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const ten = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const twenty = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number >= 0 && number < 10) {
        return one[number];
    } else if (number >= 10 && number < 20) {
        return ten[number % 10];
    } else if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return twenty[number / 10 - 1];
        }
        let a = number / 10;
        return twenty[Math.floor(a - 1)] + " " + one[number % 10];
    } else if (number >= 100 && number < 1000) {
        let b = number % 100;
        if (number % 100 == 0) {
            return one[Math.floor(number / 100)] + " hundred";
        } else if (number % 10 == 0) {
            return (
                one[Math.floor(number / 100)] +
                " hundred " +
                twenty[Math.floor(b / 10 - 1)]
            );
        } else if (number % 100 > 0 && number % 100 < 10) {
            return (
                one[Math.floor(number / 100)] + " hundred " + one[number % 100]
            );
        } else if (number % 100 >= 10 && number % 100 < 20) {
            return (
                one[Math.floor(number / 100)] +
                " hundred " +
                ten[(number % 100) % 10]
            );
        } else {
            return (
                one[Math.floor(number / 100)] +
                " " +
                "hundred" +
                " " +
                twenty[Math.floor(b / 10 - 1)] +
                " " +
                one[number % 10]
            );
        }
    }
};
