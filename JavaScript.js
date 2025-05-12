function inicial(){
    window.location.href = 'pagina-inicial.html'
}
function sobre(){
    window.location.href = 'Downloads.html'
}
function contato(){
    window.location.href = 'contato.html'
}
function github(){
    window.open('https://github.com/IagoDSN')
}
function insta(){
    window.open('https://www.instagram.com/iago_sepini/')
}

function menuas(){
    var minhaDiv = document.getElementById('menu');
      minhaDiv.classList.toggle('esconde');
      setTimeout(segunda, 100);
  }
  function segunda(){
    var minhaDiv = document.getElementById('menu');
    document.body.classList.toggle('no-scroll');
       minhaDiv.classList.toggle('mostra');
  }

  function aviso(){
   alert('O donwload não está disponivel no momento, volte mais tarde');
  }

 function pi(){
    window.open('https://www.raspberrypi.com/');
  }
  function ard(){
    window.open('https://www.arduino.cc/');
  }
  function vba(){
    window.open('https://learn.microsoft.com/pt-br/windows/win32/lwef/using-vbscript');
  }
  function piton(){
    window.open('https://www.python.org/');
  }
  function c(){
    window.open('https://isocpp.org/');
  }
  function jaba(){
    window.open('https://www.javascript.com/');
  }
  function wind(){
    window.open('https://www.microsoft.com/pt-br/download/windows');
  }

  function downloadpito() {
    const link = document.createElement('a');
    link.href = 'computacional.zip';
    link.download = 'computacional.zip';
    link.click();
  }
  function downloadsite() {
    const link = document.createElement('a');
    link.href = 'Cafe-Encanto.zip';
    link.download = 'Cafe-Encanto.zip';
    link.click();
  }
  function downloadjogo() {
    const link = document.createElement('a');
    link.href = 'Goku Bros Pong.zip';
    link.download = 'Goku Bros Pong.zip';
    link.click();
  }
  function downloadcalculo() {
    const link = document.createElement('a');
    link.href = 'Calculadora.zip';
    link.download = 'Calculadora.zip';
    link.click();
  }
  function downloadclock(){
    const link = document.createElement('a');
    link.href = 'Clock_coragem.zip';
    link.download = 'Clock_coragem.zip';
    link.click();
  }
  function email(){
    window.location.href='mailto:iagodsnunes@gmail.com?subject=Feedback%20da%20Cafeteria'
  }



  function estaDentroDoPeriodo(hoje, inicio, fim) {
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();

    if ((mesAtual === inicio.mes && diaAtual >= inicio.dia) || (mesAtual === fim.mes && diaAtual <= fim.dia) || (mesAtual > inicio.mes && mesAtual < fim.mes)) {
        return true;
    }
    return false;
}

window.onload = function() {
    const hoje = new Date();
    const inicio = { mes: 12, dia: 10 };
    const fim = { mes: 1, dia: 2 };

    if (estaDentroDoPeriodo(hoje, inicio, fim)) {
        setInterval(criarFlocoDeNeve, 300);
    }

    if (estaDentroDoPeriodo(hoje, inicio, fim)) {
        document.getElementById("imgPrincipal").src = "imagens/Coragem_natal.png";
    } else {
        document.getElementById("imgPrincipal").src = "imagens/courage.ico";
    }
};

function criarFlocoDeNeve() {
    const floco = document.createElement("div");
    floco.classList.add("snowflake");
    floco.innerHTML = "❄";
    document.body.appendChild(floco);


    floco.style.left = Math.random() * window.innerWidth + "px";
    floco.style.animationDuration = (Math.random() * 5 + 5) + "s";
    floco.style.opacity = Math.random();

    setTimeout(() => {
        floco.remove();
    }, 10000);
}


