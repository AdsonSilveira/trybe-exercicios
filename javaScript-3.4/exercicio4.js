
function maiorNum( primeiroNum, segundoNum){
 if( primeiroNum > segundoNum){
    return primeiroNum + "é maior que " + segundoNum;
 }
    else {
        return segundoNum + 'é maior que ' + primeiroNum;

 }
}
console.log(maiorNum(2,1))