// to do all numerology calculations

// to get the zodiac sign based on the date of birth

export const getAstroSign = (dd, mm) => {
    const zodiacSigns = [
        { sign: "Capricorn", start: [12, 22], end: [1, 19] },
        { sign: "Aquarius", start: [1, 20], end: [2, 18] },
        { sign: "Pisces", start: [2, 19], end: [3, 20] },
        { sign: "Aries", start: [3, 21], end: [4, 19] },
        { sign: "Taurus", start: [4, 20], end: [5, 20] },
        { sign: "Gemini", start: [5, 21], end: [6, 20] },
        { sign: "Cancer", start: [6, 21], end: [7, 22] },
        { sign: "Leo", start: [7, 23], end: [8, 22] },
        { sign: "Virgo", start: [8, 23], end: [9, 22] },
        { sign: "Libra", start: [9, 23], end: [10, 22] },
        { sign: "Scorpio", start: [10, 23], end: [11, 21] },
        { sign: "Sagittarius", start: [11, 22], end: [12, 21] }
    ];

    for (let zodiac of zodiacSigns) {
        let [startMonth, startDay] = zodiac.start;
        let [endMonth, endDay] = zodiac.end;

        if ((mm === startMonth && dd >= startDay) || (mm === endMonth && dd <= endDay)) {
            return zodiac.sign;
        }
    }
    return "Invalid Date";
};


// Function to get weekday name based on month number
export const getDayName = (dd, mm, yyyy) => {
    const date = new Date(yyyy, mm - 1, dd);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[date.getDay()];
}

// Function to get month name based on month number
export const getMonthName = (mm) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[mm - 1];
}


// Function to calculate life path number
export const getLifePathNumber = (dd, mm, yyyy) => {
    function reduceToSingleDigit(num) {
        while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
            num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
        return num;
    }

    // Reduce day, month, and year separately
    const day = reduceToSingleDigit(dd);
    const month = reduceToSingleDigit(mm);
    const year = reduceToSingleDigit(yyyy);

    // Sum all parts and reduce to a single digit or master number
    const lifePathNumber = reduceToSingleDigit(day + month + year);

    return lifePathNumber;
};

// Function to calculate destiny number
export const getDestinyNumber = (fullName) => {
    const alphabet = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    };

    const nameValue = String(fullName).toUpperCase().split('').reduce((sum, char) => {
        return sum + (alphabet[char] || 0);
    }, 0);

    // Function to reduce to a single digit or master number
    function reduceToSingleDigit(num) {
        while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
            num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
        return num;
    }

    return reduceToSingleDigit(nameValue);
};


// Function to calculate soul urge number
export const getSoulUrgeNumber = (fullName) => {
    const vowelValues = { 'A': 1, 'E': 5, 'I': 9, 'O': 6, 'U': 3 };

    let sum = 0;
    for (const char of fullName.toUpperCase()) {
        if (vowelValues[char]) {
            sum += vowelValues[char];
        }
    }

    function reduceToSingleDigit(num) {
        while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
            num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
        return num;
    }

    return reduceToSingleDigit(sum);
};

// Function to calculate personality number
export const getPersonalityNumber = (fullName) => {
    const consonantValues = { 'B': 2, 'C': 3, 'D': 4, 'F': 6, 'G': 7, 'H': 8, 'J': 1, 'K': 2, 'L': 3,
        'M': 4, 'N': 5, 'P': 7, 'Q': 8, 'R': 9, 'S': 1, 'T': 2, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8 };

    let sum = 0;
    for (const char of fullName.toUpperCase()) {
        if (consonantValues[char]) {
            sum += consonantValues[char];
        }
    }

    function reduceToSingleDigit(num) {
        while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
            num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
        return num;
    }

    return reduceToSingleDigit(sum);
};

// Function to calculate birthday number
export const getBirthdayNumber = (dd) => {
    function reduceToSingleDigit(num) {
        while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
            num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        }
        return num;
    }

    return reduceToSingleDigit(dd);
};


// Function to calculate maturity number
export const getMaturityNumber = (fullName, dd, mm, yyyy) => {
    const destinyNumber = getDestinyNumber(fullName);
    const lifePathNumber = getLifePathNumber(dd, mm, yyyy);

   
    return getBirthdayNumber(destinyNumber + lifePathNumber)  ;
};

