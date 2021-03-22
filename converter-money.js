const calcular = document.getElementById('calcular');

function converter() {
    const dolar = document.getElementById('dolar').value;
    const real = document.getElementById('real').value;
    const resultado = document.getElementById('resultado');
    
    if (moeda == 'dolar') {
        var resultado = parseFloat(valor) * 5.50
    } else {
        var resultado = parseFloat(valor) * 6.58
    }

    document.getElementById('resultado').innerHTML = "O valor em real é: R$" + resultado.toFixed(2)
}
