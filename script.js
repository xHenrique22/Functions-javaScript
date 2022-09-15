const prompt = require('prompt-sync')();
const imcCal = require('./imc');

let peso = 0;
let altura = 0;


console.log('\n ---------- Programa de cálculo IMC -----------\n|');
peso = prompt('| Digite o peso: ');
altura = prompt('| Digite a altura: ');
console.clear();

console.log(' ---------------- Dados dos valores digitados -----------------')
console.log('|\n| Peso: ',peso)
console.log('| Altura: ', altura)
console.log('| IMC: ',imcCal(peso,altura),'\n');



