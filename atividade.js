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
let num = 7; // escolha a tabuada

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
  senha = "1234"; // simulação (se quiser testar com prompt: prompt("Digite a senha:"))
} while (senha !== "1234");

console.log("Acesso liberado!");

/*Questã 7*/
function somar(a, b) {
  return a + b;
}

console.log(somar(5, 3)); // 8

/*Questão 8*/
const ehPar = (n) => n % 2 === 0;

console.log(ehPar(4)); // true
console.log(ehPar(7)); // false

/* (9) não consegui fazer direito então deixei em branco*/

/*Questão 10*/
function ehPrimo(num) {
  if (num <= 1) return false; // 0 e 1 não são primos

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // achou um divisor
    }
  }
  return true; // não achou nenhum divisor
}

console.log(ehPrimo(7));  // true
console.log(ehPrimo(10)); // false