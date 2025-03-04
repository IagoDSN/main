function inicial(){
    window.location.href = 'https://iagodsn.github.io/main/pagina-inicial.html'
}
function sobre(){
    window.location.href = 'https://iagodsn.github.io/main/Downloads.html'
}
function contato(){
    window.location.href = 'https://iagodsn.github.io/main/contato.html'
}
function github(){
    window.open('https://github.com/IagoDSN')
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