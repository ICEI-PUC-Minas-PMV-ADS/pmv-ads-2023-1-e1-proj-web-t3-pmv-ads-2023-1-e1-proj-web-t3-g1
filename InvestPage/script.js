const mode = document.getElementById('mode-icon');

mode.addEventListener('click', ()=>{
    const form = document.getElementById('login-form');
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});

function cadInvest( ativo, corretora, classeatv, qtd, dtaporte, cotacao1, ttinvestido) {


    var tb = document.getElementById("tbinvest");
    var linha = tb.insertRow(1);

    var cellAtivo = linha.insertCell(0);
    var cellCorretora = linha.insertCell (1);
    var cellClassedoativo = linha.insertCell (2);
    var cellQuantidade = linha.insertCell(3);
    var cellDatadoultimoaporte = linha.insertCell(4);
    var cellCotacao = linha.insertCell (5);
    var cellTtInvestido = linha.insertCell (6);

    cellAtivo.innerHTML = ativo;
    cellCorretora.innerHTML = corretora;
    cellClassedoativo.innerHTML = classeatv;
    cellQuantidade.innerHTML = qtd;
    cellDatadoultimoaporte.innerHTML = dtaporte;
    cellCotacao.innerHTML = "R$ " + cotacao1;
    cellTtInvestido.innerHTML = ttinvestido;
}

let Form = document.querySelector('#myform');
let inputField = document.querySelector('#resultado');

Form.addEventListener('keyup', (e) => {
    e.preventDefault();

    let Amount = inputField.value;
    let formatted = new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL'
    }).format(Amount);

    inputField.value = formatted;

})

const input = document.getElementById("n2");

input.addEventListener("keyup", formatarMoeda); 

function formatarMoeda(e) {

var v = e.target.value.replace(/\D/g,"");

v = (v/100).toFixed(2) + "";

v = v.replace(",", ".");

v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");

v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

e.target.value = v;

}

function calcular(){
    
    var valor1 = parseFloat(document.getElementById('n1').value, 10);
    var valor2 = parseFloat(document.getElementById('n2').value, 10);
    var resultadofinal = document.getElementById('resultado').value = valor1 * valor2;
    
}

const inputDate = document.getElementById("databr");

inputDate.addEventListener("keyup", formatarData);
function formatarData(e){

var databr=e.target.value.replace(/\D/g,"");

databr=databr.replace(/(\d{2})(\d)/,"$1/$2") 

databr=databr.replace(/(\d{2})(\d)/,"$1/$2") 

e.target.value = databr;

}