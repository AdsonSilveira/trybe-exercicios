function positiveNegative(number) {
    if ( number > 0){
        return "Positive!";
    } else if (number < 0){
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(positiveNegative(5))