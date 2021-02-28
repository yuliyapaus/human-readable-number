module.exports = function toReadable (number) {
      let dict = {
        "0":"zero",
        "1":"one",
        "2":"two",
        "3":"three",
        "4":"four",
        "5":"five",
        "6":"six",
        "7":"seven",
        "8":"eight",
        "9":"nine",
        "10":"ten",
        "11":"eleven",
        "12": "twelve",
        "13":"thirteen",
        "14":"fourteen",
        "15":"fifteen",
        "16":"sixteen",
        "17":"seventeen",
        "18":"eighteen",
        "19":"nineteen",
        "30":"thirty",
        "40":"forty",
        "50":"fifty",
        "60":"sixty",
        "70":"seventy",
        "80":"eighty",
        "90":"ninety",
        "20":"twenty",
        "100":"hundred",
    };
    let result = [];
    if (number === 0) {result.push(number)};
    if (number/100 >= 1) {
        result.push(Math.trunc(number/100));
        result.push('100');
        number = number%100;
        }
    if (number>20) {
        result.push(Math.trunc(number/10)*10);
        if (number%10) {result.push(number%10)};
    }
    else if (number>0) {result.push(number)}
    
    let read = result.map(function(i){return dict[i]}).join(' ');
    return read;
}
