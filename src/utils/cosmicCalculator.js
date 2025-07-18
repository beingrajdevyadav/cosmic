
// to reduce number into one digit or 11,22,33
const reduceNumber = (num)=>{
    while(num > 9 && num !== 11 && num !== 22 & num !== 33){
        num = num.toString().split('').reduce((sum, digit)=>sum + Number(digit), 0);
    }
    return num;
}



const CosmicCalculator = (username, dob)=>{
    const [year, month, day] = dob.split('-').map(Number);
    const total = reduceNumber(year) + reduceNumber(month) + reduceNumber(day);
    const lifePathNum = reduceNumber(total);






    return {lifePathNum}
}