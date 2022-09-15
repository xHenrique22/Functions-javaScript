/*
* Crie uma um programa de saúde, nesse programa desenvolva
* uma função que calcula o imc de pacientes, a função deverá 
* receber os  seguintes parâmetros, peso e altura.
*
*/

function imcCal (peso,altura) {
    const imc = peso / Math.pow(altura,2)
    return Math.trunc(imc);
    
}
module.exports = imcCal;