const a = 45;
const b = 45;
const c = 90;
let soma = a + b + c;
let todosangulospositivos = a > 0 && b > 0 && c > 0;
if(todosangulospositivos){
    if(soma === 180){
    console.log(true);
    } else {
        console.log(false);
    }   
} else {
    console.log("Erro: ângulo inválido");
}