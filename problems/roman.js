const addAndSub = (romanNums, i, plus, num, symbolsArr)=> {


    console.log(!symbolsArr.includes(romanNums[+i + 1]));
    console.log(plus)
    console.log(1000 - 100 + 1000 - 10 + 100 - 1 + 5)
    if( !symbolsArr.includes(romanNums[+i + 1])) {
        num += plus;
    } 
    if( symbolsArr.includes(romanNums[+i + 1])) {
        num -= plus;
    }

    console.log(num)
    return num;
}

 var romanToInt = function(s) {
    let num = 0;
    let romanNums = [...s];

    const symbolsArrI = ["V", "X", "L", "C", "D", "M"];
    const symbolsArrV = ["X", "L", "C", "D", "M"];
    const symbolsArrX = [ "C", "L", "D", "M"];
    const symbolsArrL = [ "C", "D", "M"];
    const symbolsArrC = [ "D", "M"];
    const symbolsArrD = [ "M"];
   
    for (let i in romanNums ) {
       console.log(romanNums[i]);

        if(romanNums[i] === "I" ) {
            num = addAndSub(romanNums, i, 1, num, symbolsArrI);   
        } 
        else if(romanNums[i] === "X") {
            num = addAndSub(romanNums, i, 10, num, symbolsArrX);     
        } else if(romanNums[i] === "V") {
            num = addAndSub(romanNums, i, 5, num, symbolsArrV);     
        } else if(romanNums[i] === "L") {
            num = addAndSub(romanNums, i, 50, num, symbolsArrL);      
        } else if(romanNums[i] === "C") {
            num = addAndSub(romanNums, i, 100, num, symbolsArrC);      
        } else if(romanNums[i] === "D") {
            num = addAndSub(romanNums, i, 500, num, symbolsArrD);     
        } else if(romanNums[i] === "M") {
            num = addAndSub(romanNums, i, 1000, num, []);     
        }   
    }

    return num;
};
console.log(romanToInt("MMMMCCCXLIV"));