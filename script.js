function calcular() {
    var vlr1 = parseInt(document.getElementById('primeiroValor').value);
    var vlr2 = parseInt(document.getElementById('segundoValor').value);
    var vlr3 = parseInt(document.getElementById ('terceiroValor').value);
    document.getElementById('resultado').value = (vlr1 + vlr2 + vlr3);
}
function multiplicar() {
    var vlr1 = parseInt(document.getElementById('primeiroValor1').value);
    var vlr2 = parseInt(document.getElementById('segundoValor1').value);
    var vlr3 = parseInt(document.getElementById ('terceiroValor1').value);
    document.getElementById('resultado1').value = (vlr1 * vlr2 * vlr3);
}
function dividir() {
    var vlr1 = parseInt(document.getElementById('primeiroValor2').value);
    var vlr2 = parseInt(document.getElementById('segundoValor2').value);
    var vlr3 = parseInt(document.getElementById ('terceiroValor2').value);
    document.getElementById('resultado2').value = (vlr1 / vlr2 / vlr3);
}
function subtrair() {
    var vlr1 = parseInt(document.getElementById('primeiroValor3').value);
    var vlr2 = parseInt(document.getElementById('segundoValor3').value);
    var vlr3 = parseInt(document.getElementById ('terceiroValor3').value);
    document.getElementById('resultado3').value = (vlr1 - vlr2 - vlr3);
}