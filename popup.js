let body = document.getElementsByTagName('body');
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

window.onload = (event) => {
     body[0].style.width = '62px';
     body[0].style.backgroundColor = '#f2f3f4';     
     console.log('PAGE DID LOAD');





};

function HideScrollbar() {
  var style = document.createElement("style");
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
};


team.addEventListener('click', (event)=>{
 	event.preventDefault()
    grid1.replaceChildren()    
 	let divy = document.createElement('center');
    let brk2 = document.createElement('br');
 	let wordo = document.createElement('h2');
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

    divy.appendChild(brk2);
 	divy.appendChild(wordo);
 	divy.appendChild(brk);
 	list.appendChild(divy);
 	list.appendChild(descLink);
 	grid1.appendChild(list);

 	//grid1.style.display = 'block';
    grid1.style.visibility = 'visible';
    grid2.style.backgroundColor = 'transparent';
    grid1.style.overflow = 'scroll';
    body[0].style.width = '350px'; 
    body[0].style.backgroundColor='beige';
    HideScrollbar();
 	
 }, {once : true});



prod.addEventListener('click', (event)=>{
    event.preventDefault()
    grid1.replaceChildren()
    
    let br2 = document.createElement('br');
    let wordo = document.createElement('h2');    
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
    
    let descLink2 = document.createElement('a');
    descLink2.href = 'https://100035.pythonanywhere.com/nps-admin';
    descLink2.target = '_blank';
    descLink2.style.float = 'left';
    descLink2.style.padding = '20px';
    let image2 = document.createElement('img');
    image2.src = 'https://img.icons8.com/avantgarde/100/000000/ruler.png';
    image2.title = 'NPS Scale';

    let descLink3 = document.createElement('a');
    descLink3.href = 'https://liveuxstoryboard.com/';
    descLink3.target = '_blank';
    descLink3.style.float = 'left';
    descLink3.style.padding = '20px';
    let image3 = document.createElement('img');
    image3.src = 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-storyboard-filmmaking-flaticons-flat-flat-icons.png';
    image3.title = 'Live UX Storyboard';

    //wordo.appendChild(br); 
    divy.appendChild(wordo);
    
    descLink.appendChild(image);
    descLink1.appendChild(image1);    
    descLink2.appendChild(image2);
    descLink3.appendChild(image3); 
    divy.appendChild(descLink);
    divy.appendChild(descLink1);
    divy.appendChild(descLink2);
    divy.appendChild(descLink3);    

    //list.appendChild(br2)
    //list.appendChild(wordo);
    list.appendChild(divy); 

    grid1.appendChild(list);
    grid1.style.visibility = 'visible';
    grid2.style.backgroundColor = 'transparent';
    body[0].style.width = '350px';
    body[0].style.backgroundColor='beige';    

}, {once : true});


chat.addEventListener('click', (event)=>{
  event.preventDefault()
  grid1.replaceChildren()
  let divy = document.createElement('center');
  let brk2 = document.createElement('br');
  let wordo = document.createElement('h2');
  
  wordo.style.color = '#018749';
  wordo.innerHTML = 'Chat Rooms';
  wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';   
  divy.appendChild(brk2);
  divy.appendChild(wordo);
  list.appendChild(divy);
  grid1.appendChild(list);

  grid1.style.visibility = 'visible';
  grid2.style.backgroundColor = 'transparent';
  body[0].style.width = '350px';
  body[0].style.backgroundColor='beige';  
    
 }, {once : true});
 


