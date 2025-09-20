/*Questã 1*/
let numero = -5;
if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
}

/*Questã 2*/
let idade = 16;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

/*Questã 3*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*Questã 4*/
let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


/*Questã 5*/
let contador = 10;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

/*Questã 6*/
let senha;
do {
    senha = "1234"; 
} while (senha !== "1234");

console.log("Acesso liberado!");

/*Questã 7*/
function somar(a, b) {
    return a + b;
}

console.log(somar(5, 3));

/*Questão 8*/
const ehPar = (n) => n % 2 === 0;

console.log(ehPar(4)); 
console.log(ehPar(7)); 

/* (9) não consegui fazer direito então deixei em branco*/

/*Questão 10*/
function ehPrimo(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(ehPrimo(7));
console.log(ehPrimo(10));