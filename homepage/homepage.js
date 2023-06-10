
document.addEventListener('DOMContentLoaded', function () {

    var form = document.querySelector('form');
    var tipoInput = document.getElementById('tipo');
    var valorInput = document.querySelector('input[name="valor"]');
    var dataReceitaInput = document.querySelector('input[name="data"]');
    var dataPagamentoInput = document.querySelectorAll('input[name="data"]')[1];


    var tabelaExtrato = document.querySelector('.div_box table');


    var totalElement = document.getElementById('somatoria');


    var total = 0;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var tipo = tipoInput.value;
        var valor = parseFloat(valorInput.value);
        var dataReceita = dataReceitaInput.value;
        var dataPagamento = dataPagamentoInput.value;

        if (!isNaN(valor) && valor > 0) {
            var newRow = tabelaExtrato.insertRow();

            var tipoCell = newRow.insertCell();
            var dataReceitaCell = newRow.insertCell();
            var dataPagamentoCell = newRow.insertCell();
            var valorCell = newRow.insertCell();

            tipoCell.textContent = tipo;
            dataReceitaCell.textContent = dataReceita;
            dataPagamentoCell.textContent = dataPagamento;
            valorCell.textContent = valor.toFixed(2);


            total += valor;


            totalElement.textContent = 'Total: R$ ' + total.toFixed(2);

            tipoInput.value = '';
            valorInput.value = '';
            dataReceitaInput.value = '';
            dataPagamentoInput.value = '';
        } else {
            alert('Por favor, insira um valor numérico válido.');
        }
    });
});
