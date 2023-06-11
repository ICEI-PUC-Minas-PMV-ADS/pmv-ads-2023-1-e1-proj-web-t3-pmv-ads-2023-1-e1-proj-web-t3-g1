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

function Cadastro(){
  event.preventDefault()
  var varTipo = document.getElementsByName("tipo");
  var varDataDes = document.getElementsByName("datades");
  var varDataPag = document.getElementsByName("datapag");
  var varValor = document.getElementsByName("valor");
  var varDesc = document.getElementsByName("message");

  if(varTipo[0].value == '#' || varValor[0].value == '' || varDataDes[0].value == '' || varDataPag[0].value == ''){
      alert('Preencha os dados corretamente.');
  } else{
      document.getElementById("valorTipo").innerHTML = varTipo[0].value;
      document.getElementById("valorDataDes").innerHTML = varDataDes[0].value;
      document.getElementById("valorDataPag").innerHTML = varDataPag[0].value;
      document.getElementById("valorDesp").innerHTML = varValor[0].value;
      document.getElementById("valorDesc").innerHTML = varDesc[0].value;
      document.getElementById("valorTotal").innerHTML = varValor[0].value;

      alert('Despesa cadastrada com sucesso!');
  }
}

function Limpar(){
  event.preventDefault()

    document.getElementById("valorTipo").innerHTML = '';
    document.getElementById("valorDataDes").innerHTML = '';
    document.getElementById("valorDataPag").innerHTML = '';
    document.getElementById("valorDesp").innerHTML = '';
    document.getElementById("valorDesc").innerHTML = '';
    document.getElementById("valorTotal").innerHTML = '';
}

  String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
    };

  function mascaraMoeda(campo,evento){
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
    var resultado  = "";
    var mascara = "##.###.###,##".reverse();
    for (var x=0, y=0; x<mascara.length && y<valor.length;) {
        if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
        } else {
        resultado += valor.charAt(y);
        y++;
        x++;
        }
    }
    campo.value = resultado.reverse();
    }

    function darkMode() {
      var element = document.body;
      element.classList.toggle("dark-mode");
   }
