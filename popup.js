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


team.addEventListener('click', (event)=>{
 	event.preventDefault()

 	let divy = document.createElement('center');
 	let wordo = document.createElement('h2');
 	let brk = document.createElement('br');
 	let descLink = document.createElement('iframe');
 	//let descTag = document.createElement('span');
 	
 	wordo.style.color = '#018749';
 	wordo.innerHTML = 'Dowell Team';
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
 	
 });


chat.addEventListener('click', (event)=>{
 	event.preventDefault()

 	let divy = document.createElement('center');
 	let wordo = document.createElement('h2');
 	
 	wordo.style.color = '#018749';
 	wordo.innerHTML = 'Chat Rooms'; 	
 	divy.appendChild(wordo);
 	list.appendChild(divy);
 	grid1.appendChild(list);
 	
 });
 
