const body = document.querySelector('body');


// Cria o header
const header = document.createElement('header');
body.appendChild(header);

const headerContainer = document.createElement('div')
headerContainer.classList.add('headerContainer');
header.appendChild(headerContainer);

const headerRow = document.createElement('div')
headerRow.classList.add('headerRow');
headerContainer.setAttribute('id' , 'header-row')
headerContainer.appendChild(headerRow);

//Criar div sobre
const divsobre = document.createElement ('div')
divsobre.style.display = 'none'
divsobre.className ='divsobre'
body.appendChild(divsobre);
const textoteste =document.createElement('p');
divsobre.appendChild(textoteste);
textoteste.innerText = 'Este site foi criado como  ativadade na matéria de Desenvolvimento para' +
' Dispositivo Móvel,' +
' Web e Game, do Professor Eduardo Ono, no 4° semestre do curso de Análise e Desenvolvimento de Sistemas' +
' da Universidade Unisal Campinas-SP.\n\n' +
'O tema foi livre, escolhi fazer um gerador de mensagem em inglês, além de consumir uma API' +
' da internet, ele gera mensagens em inglês, como fiz um intercâmbio no ano de 2018, tenho um pouco de' +
' conhecimento no assunto.\n\n' +
'Para gerar a mensagem é muito simples, é só clicar no botão "Gerar Frase" que a mensagem sera gerada na' +
' tela.\n' +
'Caso queira ver outra mensagem, é só repetir o processo.' ;

//Criar div contato
const divcontato = document.createElement ('div')
divcontato.style.display = 'none'
divcontato.className ='divcontato'
body.appendChild(divcontato);
const textoteste1 =document.createElement('p');
divcontato.appendChild(textoteste1);
textoteste1.innerText ='Nome: Guilherme Franco de Faria Mello\n\n' +
'Ra: 160002352\n\n' +
'Universidade: UNISAL - Unidade Campinas - São José\n\n' +
'Curso: Análise e Desenvolvimento de Sistemas\n\n' +
'Matéria: Desenvolvimento para Dispositivo móvel,WEB e GAME\n\n' +
'Professor: Eduardo Ono\n\n' +
'Email: Mellogui94@gmail.com\n\n' +
'Telefone: (19) 993625214\n\n' +
'Github: GuilhermeFFMello\n\n';

// Cria a parte esquerda do header
const headerLeft = document.createElement('div')
headerLeft.classList.add('headerLeft');
headerRow.appendChild(headerLeft);

const siteIcone = document.createElement('a')
siteIcone.classList.add('siteIcone');
siteIcone.setAttribute('href' , '#');
siteIcone.setAttribute('title' , 'Home');
headerLeft.appendChild(siteIcone);
siteIcone.addEventListener('click',toggle1);

const logo = document.createElement('img')
logo.classList.add('logo');
logo.setAttribute('src' , 'assets/logo.png');
logo.setAttribute('alt' , 'Home');
siteIcone.appendChild(logo);

const gui = document.createElement('img')
gui.classList.add('gui');
// gui.setAttribute('src' , '');
gui.src = './assets/Guizao.jpeg';
gui.setAttribute('alt' , 'contato');
textoteste1.appendChild(gui);

// Cria a parte direita do header
const headerRight = document.createElement('div')
headerRight.classList.add('headerRight');
headerRow.appendChild(headerRight);

const menu = document.createElement('nav')
menu.classList.add('menu');
menu.setAttribute('role' , 'navigation');
headerRight.appendChild(menu);

const nav = document.createElement('ul')
nav.classList.add('nav');
nav.setAttribute('class' , 'site-nav');
menu.appendChild(nav);

//Cria o Primeiro Item do Menu
const menuHome = document.createElement('li')
menuHome.classList.add('menuHome');
menuHome.setAttribute('class' , 'menu-home');
nav.appendChild(menuHome);
// menuHome.classList.add('menu');

const menuHomeLink = document.createElement('a')
menuHomeLink.classList.add('menuHomeLink');
menuHomeLink.setAttribute('class' , 'menu-first-level-link');
menuHomeLink.innerHTML='<href="#">Home</input>'
menuHomeLink.addEventListener('click',toggle1);
menuHome.appendChild(menuHomeLink);

//Cria o Segundo Item do Menu
const menuSobre = document.createElement('li')
menuSobre.classList.add('menuSobre');
menuSobre.setAttribute('class' , 'menu-sobre');
nav.appendChild(menuSobre);
// menu.classList.add('menu');

const menuSobreLink = document.createElement('a')
menuSobreLink.classList.add('menuSobreLink');
menuSobreLink.setAttribute('class' , 'menu-second-level-link');
menuSobreLink.innerHTML='<href="#">Sobre</input>'
menuSobreLink.addEventListener('click',toggle2);
menuSobre.appendChild(menuSobreLink);

//Cria o Terceiro Item do Menu
const menuContato = document.createElement('li')
menuContato.classList.add('menuContato');
menuContato.setAttribute('class' , 'menu-contato');
nav.appendChild(menuContato);
// menuContato.classList.add('menu');

const menuContatoLink = document.createElement('a')
menuContatoLink.classList.add('menuContatoLink');
menuContatoLink.setAttribute('class' , 'menu-third-level-link');
menuContatoLink.innerHTML='<href="#">Contato</input>'
menuContato.addEventListener('click',toggle3);
menuContato.appendChild(menuContatoLink);


// Dark Mode
const dark = document.createElement('li');
dark.setAttribute('id' , 'chk');
dark.innerHTML='<input type="checkbox">Light/Dark</input>'
headerContainer.appendChild(dark);


const chk = document.getElementById('chk')
//chk=document.getElementbyid ('ovo')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')

})


//tag main
const main= document.createElement('main');
main.setAttribute('id' , 'tela principal');

// Cria a div form-group
const formGroup = document.createElement('div');
formGroup.classList.add('form-group');
body.appendChild(formGroup);
const textoteste2 =document.createElement('p');
formGroup.appendChild(textoteste2);
textoteste2.innerText ='Seja bem vindo ao meu site.\n Gerador de mensagens em Inglês.' ;
// 'Nele você pode gerar mensagens em inglês,\n basta clicar no botão "Gerar Frase".'
 textoteste2.classList.add('teste');

const titulo = document.createElement('h1');
titulo.innerHTML = 'Frases em Ingles';
formGroup.appendChild(titulo);
titulo.classList.add('teste');

// Cria a div input-container
const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');
inputContainer.setAttribute('id' , 'aqui')
formGroup.appendChild(inputContainer);

const inputForm = document.createElement('form');
inputForm.setAttribute('id', 'input-form');
inputContainer.appendChild(inputForm);

const inputNumber = document.createElement('button');
inputNumber.setAttribute('type', 'submit');
inputNumber.setAttribute('id', 'input-number');
inputNumber.setAttribute('placeholder', 'random');
inputNumber.setAttribute('onclick', 'request()')
inputNumber.setAttribute('class' , 'button')
inputNumber.innerHTML = 'GERAR FRASE'
inputContainer.appendChild(inputNumber);
// inputNumber.classList.add('teste');


// Cria o footer
const footer = document.createElement('footer');
footer.classList.add('footer');
footer.setAttribute('id' , 'bottom')
formGroup.appendChild(footer);

// Botão Back to Top
const backtoTop = document.createElement('a');
backtoTop.setAttribute('id' , 'link-topo');
backtoTop.setAttribute('href' , '#');
body.appendChild(backtoTop);

const backtoTopButton = document.createElement('img')
backtoTopButton.classList.add('backtoTopButton');
backtoTopButton.setAttribute('src' , 'assets/load_more.svg');
backtoTopButton.setAttribute('alt' , 'Back To Top');
backtoTop.appendChild(backtoTopButton);


//Menu
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
body.appendChild(menuContainer);

menuContainer.setAttribute('id' , 'ovo')

const paragrafo = document.createElement('div');
paragrafo.classList.add('lindo');
menuContainer.appendChild(paragrafo);

const linha = document.createElement('br');
inputContainer.appendChild(linha);

const res= document.createElement('div');
formGroup.appendChild(res);

async function mostra(){
  var valor="";
  var fraseFinal = valor['slip'] ['advice'];
  res.innerHTML=`<q>Frase : ${fraseFinal}</q>`;

}

async function request(){

    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    var a = await fetch(`https://api.adviceslip.com/advice`, requestOptions)
    var valor = await a.json();

    var msgRecebida = "";
    console.log(valor['slip']['advice']);

    var fraseFinal = valor['slip']['advice'];
    res.innerHTML=`<q>A Frase é : ${fraseFinal}</q>`;
  
 

    
}


function toggle1(){
  if(formGroup.style.display == "flex"){
      
      divsobre.style.display = "none";
      divcontato.style.display = "none";
  }
  else{
      formGroup.style.display = "";
      divsobre.style.display = "none";
      divcontato.style.display = "none";
  }
}
function toggle2(){
  formGroup.style.display = 'none';
  if(divsobre.style.display == 'flex'){
      
      formGroup.style.display = "none";
      divcontato.style.display = "none";
  }else{
      divsobre.style.display = "flex";
      formGroup.style.display = "none";
      divcontato.style.display = "none";
  }
  
}
function toggle3(){
  formGroup.style.display = 'none';
  if(divcontato.style.display == 'flex'){
      
      formGroup.style.display = "none";
      divsobre.style.display = "none";
  }else{
      divcontato.style.display = "flex";
      formGroup.style.display = "none";
      divsobre.style.display = "none";
  }
}
