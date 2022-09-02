let container = document.querySelector('#grid-container');
let grid1 = document.querySelector('#grid1');
let team = document.querySelector('#team');
let user_details = document.querySelector('#user_details');
let prod = document.querySelector('#products');
let dow_card = document.querySelector('#card');
let pref = document.querySelector('#preference');
let notif = document.querySelector('#notif');
let chat  = document.querySelector('#chat');
let enter = document.querySelector('#enter');
let list = document.createDocumentFragment();

function HideScrollbar() {
  var style = document.createElement("style");
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
};


team.addEventListener('click', (event)=>{
 	event.preventDefault()

 	let divy = document.createElement('center');
 	let wordo = document.createElement('h1');
 	let brk = document.createElement('br');
 	let descLink = document.createElement('iframe');
 	//let descTag = document.createElement('span');
 	
 	wordo.style.color = '#018749';
 	wordo.innerHTML = 'Dowell Team';
    wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
 	descLink.src = 'https://ll07-team-dowell.github.io/DowellJobPortal/';
 	//descTag.innerHTML = 'Job Portal';
 	//descLink.appendChild(descTag);
 	descLink.height = '700px'; 	
 	descLink.width = '270px'; 	
 	divy.appendChild(wordo);
 	divy.appendChild(brk);
 	list.appendChild(divy);
 	list.appendChild(descLink);
 	grid1.appendChild(list);

 	grid1.style.display = 'block';
    HideScrollbar();
 	
 });



prod.addEventListener('click', (event)=>{
    event.preventDefault()

    let wordo = document.createElement('h1');
    wordo.innerHTML = 'Products';
    let br = document.createElement('br');
    wordo.style.color = '#018749';
    wordo.style.textAlign = 'center';
    wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
    let divy = document.createElement('center');
    divy.style.marginTop = '25px';
    divy.style.marginLeft = '50px';
    //let frame = document.createElement('iframe');
    let descLink = document.createElement('a');

    descLink.href = 'https://ll07-team-dowell.github.io/DowellJobPortal/';
    descLink.target = '_blank';
    descLink.style.float = 'left';
    descLink.style.padding = '20px';
    let image = document.createElement('img');
    image.src = "https://img.icons8.com/windows/96/000000/design-portal.png"
    image.title = 'Dowell Portal';
        
    let descLink1 = document.createElement('a');
    descLink1.href = 'https://100069.pythonanywhere.com';
    descLink1.target = '_blank';
    descLink1.style.float = 'left';
    descLink1.style.padding = '20px';
    let image1 = document.createElement('img');
    image1.src = 'https://img.icons8.com/doodle/96/000000/messaging-.png';
    image1.title = 'Dowell Chat';

    wordo.appendChild(br);
    descLink.appendChild(image);
    descLink1.appendChild(image1);
    divy.appendChild(descLink);
    divy.appendChild(descLink1);
    list.appendChild(wordo);
    list.appendChild(divy); 

    grid1.appendChild(list);

});
