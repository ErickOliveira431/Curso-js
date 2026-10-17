
    var nome = prompt("qual e o seu nome?")
    var idade = 18

    console.log("ola " + nome + " voce tem " + idade + " anos");
    alert("ola " + nome + " voce tem " + idade + " anos");

    // String --> texto
    // Number --> numeros
    // boolean --> true or false
    // void --> vazio
    // undefined --> indefinido
    // null --> nulo
    
    alert("digite dois numeros que vou  somar eles para voce")
    let num1 = Number(prompt("digite o primeiro numero"))
    let num2 = Number(prompt("digite o segundo numero"))
    let soma = num1 + num2

    let contador = 0
    
    let password = "alunosenai"
    let senha = prompt("digite a senha")
    if (senha == password) {
        alert("senha correta")
    }else{
        alert("senha incorreta")
    }  

    const nota1 = Number(prompt("digite a primeira nota"))
    const nota2 = Number(prompt("digite a segunda nota"))
    const media = (nota1 + nota2) / 2 
    if (media >= 7) {
        alert("aprovado")
    } else if (media >= 4) {
        alert("recuperação")
    } else {
        alert("reprovado")
    }

    let idade = 25;
const saldo = 115;
let nomee = 'maria';
let sim = true

console.log(typeof idade);
console.log(typeof saldo);
console.log(typeof nome);
console.log(typeof sim );

console.log(idade);
console.log(saldo);
console.log(nome);
console.log(sim);


console.log("ola mundo")
console.log("Bem-vindo à lógica de programação");
console.log("4 + 10");
console.log("2 - 3");

let nome = 'ercik';
console.log(nome)

nome = 'emilly'; 
console.log(nome)

const imposto = 21
console.log(imposto);