
// to reduce number into one digit or 11,22,33
const reduceNumber = (num) => {
    while (num > 9 && num !== 11 && num !== 22 & num !== 33) {
        num = num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
}

// Zodiac Signs 
const ZodiacSigns = [
    {
        sign: "Capricorn",
        start: [12, 22],
        end: [1, 19],
    },
    {
        sign: "Aquarus",
        start: [1, 20],
        end: [2, 18],
    },
    {
        sign: "Pisces",
        start: [2, 19],
        end: [3, 20],
    },
    {
        sign: "Aries",
        start: [3, 21],
        end: [4, 19],
    },
    {
        sign: "Taurus",
        start: [4, 20],
        end: [5, 20],
    },
    {
        sign: "Gemini",
        start: [5, 21],
        end: [6, 20],
    },
    {
        sign: "Cancer",
        start: [6, 21],
        end: [7, 22],
    },
    {
        sign: "Leo",
        start: [7, 23],
        end: [8, 22],
    },
    {
        sign: "Virgo",
        start: [8, 23],
        end: [9, 22],
    },
    {
        sign: "Libra",
        start: [9, 23],
        end: [10, 22],
    },
    {
        sign: "Scorpio",
        start: [10, 23],
        end: [11, 21],
    },
    {
        sign: "Sagittarius",
        start: [11, 22],
        end: [12, 21],
    },
];

const getAstroSign = (dob) => {

    const [year, monthStr, dayStr] = dob.split('-');
    const month = parseInt(monthStr, 10);
    const day = parseInt(dayStr, 10);

    for (let z of ZodiacSigns) {
        const [startMonth, startDay] = z.start;
        const [endMonth, endDay] = z.end;

        if (month === startMonth && day >= startDay || month === endMonth && day <= endDay) {
            return z.sign;
        }
    }

    return "Unkown"; // this will never hit!!!
}


// letter to number object
const letterToNumber = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
};

const VOWELS = ["A", "E", "I", "O", "U"];

// soul urge number
const getSoulUrge = (fullname) => {
    const name = fullname.toUpperCase().replace(/[^A-Z]/g, '');
    const total = name.split('').filter((char) => VOWELS.includes(char)).reduce((sum, char) => sum + letterToNumber[char], 0);
    return reduceNumber(total);
}

const CosmicCalculator = (username, dob) => {

    // life path number
    const [year, month, day] = dob.split('-').map(Number);
    const total = reduceNumber(year) + reduceNumber(month) + reduceNumber(day);
    const lifePathNum = reduceNumber(total);

    // astro sign
    const astroSign = getAstroSign(dob);
    // soul urge
    const soulUrgeNumber = getSoulUrge(username);





    return { lifePathNum, astroSign, soulUrgeNumber }
}