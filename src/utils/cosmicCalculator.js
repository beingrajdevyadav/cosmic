
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


const CosmicCalculator = (username, dob) => {

    // life path number
    const [year, month, day] = dob.split('-').map(Number);
    const total = reduceNumber(year) + reduceNumber(month) + reduceNumber(day);
    const lifePathNum = reduceNumber(total);


    // astro sign
    const astroSign = getAstroSign(dob);





    return { lifePathNum, astroSign }
}