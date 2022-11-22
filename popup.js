let body = document.getElementsByTagName('body');
let container = document.querySelector('#grid-container');
let grid1 = document.querySelector('#grid1');
let grid2 = document.querySelector('#grid2');
let team = document.querySelector('#team');
let user_details = document.querySelector('#user_details');
let prod = document.querySelector('#products');
let dow_card = document.querySelector('#card');
let pref = document.querySelector('#preference');
let notif = document.querySelector('#notif');
let chat  = document.querySelector('#chat');
let enter = document.querySelector('#enter');
let list = document.createDocumentFragment();
let forSvg = document.querySelector('.SVGBadge-svg');
let forSvg1 = document.querySelector('.SVGBadge-svgBackground');
let forSvg2 = document.querySelector('.SVGBadge-number');

window.onload = (event) => {
     body[0].style.width = '62px';     
     body[0].style.backgroundColor = '#f2f3f4';      
     console.log('PAGE DID LOAD'); 

};



chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
        let store_tabs = [];
        let store_sessionID = [];
        //Get all urls of opened tabs and get the one with 'sessionID, if any'
        for(let i = 0; i < tabs.length; i++) {                                        
                    store_tabs.push(tabs[i].url);                    
        }         
        for(let theID of store_tabs){
            if(theID.includes('session_id') === true){
                let get_theID = theID.split('session_id=')[1];
                store_sessionID.push(get_theID);
                console.log(`Session ID Identified:${theID} \nAnd it's ${get_theID}`);
            } }
            //Pass sessionID to Login Function
            dict_SessionID = {'key': `${store_sessionID}`};
            fetch('https://100014.pythonanywhere.com/api/profile/', {
                      method: 'POST',
                      headers: {
                          'Accept': 'application/json, text/plain, */*',
                          'content-type':'application/json'
                            },          
                      body: JSON.stringify(dict_SessionID) })    
            .then(response => response.json())
            .then(json => {
                console.log(json); 
                console.log(`${json['username']}'s Role is ${json['role']}`); 
        })
        if(store_sessionID.length != 0){
            forSvg.style.display = 'block';
            forSvg1.style.display = 'block';
            forSvg2.style.display = 'block';
        }
   }); 

    



function HideScrollbar() {
  var style = document.createElement("style");
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
};

team.addEventListener('click', (event)=>{
 	event.preventDefault()
    grid1.replaceChildren()

 	let stylo = document.createElement('style');
    stylo.innerHTML = `html::-webkit-scrollbar {width: 10px}`;
    document.head.appendChild(stylo);
    let divy = document.createElement('center');
    let brk2 = document.createElement('br');
 	let wordo = document.createElement('h2');
 	let brk = document.createElement('br'); 	
    let descLink = document.createElement('iframe'); 	
 	
 	wordo.style.color = '#018749';
 	wordo.textContent = 'Dowell Team';
    wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
 	descLink.src = 'https://ll07-team-dowell.github.io/DowellJobPortal/';
 	
    descLink.height = '700px'; 	
 	descLink.width = '270px';
    descLink.loading = 'lazy';

    divy.appendChild(brk2);
 	divy.appendChild(wordo);
 	divy.appendChild(brk);
 	list.appendChild(divy);
 	list.appendChild(descLink);
 	grid1.appendChild(list); 
    
 	

    grid1.style.visibility = 'visible';
    grid2.style.backgroundColor = 'transparent';
    grid1.style.overflow = 'scroll';
    body[0].style.width = '350px'; 
    body[0].style.backgroundColor='beige';
    //HideScrollbar(); 

 }, {once : true});   



prod.addEventListener('click', (event)=>{
    event.preventDefault()
    grid1.replaceChildren()
    
    
    //let br2 = document.createElement('br');
    let wordo = document.createElement('h2');    
    wordo.textContent = 'Products';
    let br = document.createElement('br');
    wordo.style.color = '#018749';
    wordo.style.textAlign = 'center';
    wordo.style.marginLeft = '-50px';    
    wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
    let divy = document.createElement('center');
    let loader = document.createElement('div');
    let secondDivEle = document.createElement('div');
    

    divy.style.marginTop = '25px';
    divy.style.marginLeft = '50px';
    
    loader.className = 'loader';
    loader.style.display = 'hidden';
    secondDivEle.className = 'subDiv';
        
    divy.appendChild(wordo);
    divy.appendChild(loader);
    divy.appendChild(secondDivEle);
    list.appendChild(divy); 
    grid1.appendChild(list);
       
    let appendSubDiv = document.querySelector('.subDiv');
    fetch('http://100069.pythonanywhere.com/products/products/')
    .then(resp=> resp.json()).then(data=> {
            let htmlString = '';
            let iconArray = [
                    'https://img.icons8.com/bubbles/100/000000/collaboration.png',
                    'https://img.icons8.com/bubbles/100/000000/inspection.png',
                    'https://img.icons8.com/bubbles/100/000000/employee-card.png',
                    'https://img.icons8.com/bubbles/100/000000/process.png',
                    'https://img.icons8.com/bubbles/100/000000/survey.png',
                    'https://img.icons8.com/bubbles/100/000000/define-location.png',
                    'https://img.icons8.com/bubbles/100/000000/mind-map.png',
                    'https://img.icons8.com/bubbles/100/40C057/link-company-parent.png',
                    'https://img.icons8.com/bubbles/100/000000/project-setup.png'
                                    ]
            
            if(appendSubDiv.childNodes.length === 0){
                loader.style.display = 'block';
            }
            data.map(function(pdct){
                let icon = iconArray[Math.floor(Math.random()*iconArray.length)];
                htmlString += `<div style='float: left'>
                            <b><a href='${pdct.product_url}' target='_blank'>${pdct.product_name}</a></b>
                            <img src="${icon}" /><hr></div>`                
            })            
            appendSubDiv.innerHTML = htmlString;               
            loader.style.display = 'none';
    });
      
    grid1.style.visibility = 'visible';
    grid2.style.backgroundColor = 'transparent';
    grid1.style.overflow = 'scroll';
    body[0].style.width = '350px';
    body[0].style.backgroundColor='beige';    
    
}, {once : true});


chat.addEventListener('click', (event)=>{
  event.preventDefault()
  grid1.replaceChildren()    

  let divy = document.createElement('center');
  let brk2 = document.createElement('br');
  let wordo = document.createElement('h2');
  let btn = document.createElement('button');
  
  wordo.style.color = '#018749';
  wordo.textContent = 'Chat Rooms';
  wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';   
  btn.height = '50px';
  btn.className = 'chat-btn';

  btn.style.marginTop = '50px';
  btn.style.marginBottom = '50px';
  btn.style.marginRight = '50px';
  btn.style.marginLeft = '50px';
  btn.style.borderRadius = '6px';
  btn.textContent = 'Click To See';

  divy.appendChild(brk2);
  divy.appendChild(wordo);
  divy.appendChild(btn);
  list.appendChild(divy);
  grid1.appendChild(list);

  grid1.style.visibility = 'visible';
  grid2.style.backgroundColor = 'transparent';
  body[0].style.width = '350px';
  body[0].style.backgroundColor='beige';  
 

  //***************Another Layer***************
  let chatLayer1 = document.querySelector('.chat-btn');
  chatLayer1.addEventListener('click', (event)=>{
                event.preventDefault()
                grid1.replaceChildren()
                
                let divy = document.createElement('center');
                let brk = document.createElement('br');
                let wordo = document.createElement('h2');
                let brk2 = document.createElement('br');
                let descLink = document.createElement('iframe');                

                wordo.style.color = '#018749';
                wordo.textContent = 'Enter Room';
                wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
                descLink.src = 'https://ll04-finance-dowell.github.io/100069-dowell-chat-client/';
               
                descLink.height = '700px'; 	
                descLink.width = '270px';                
                descLink.loading = 'lazy';

                divy.appendChild(brk);
                divy.appendChild(wordo);
                divy.appendChild(brk2);
                list.appendChild(divy);
                list.appendChild(descLink);
                grid1.appendChild(list);
                            
                grid1.style.visibility = 'visible';
                grid2.style.backgroundColor = 'transparent';
                grid1.style.overflow = 'scroll';
                body[0].style.width = '350px'; 
                body[0].style.backgroundColor='beige';
                //HideScrollbar(); 	  
      
            }, {once : true});  
               
    
 }, {once : true});

notif.addEventListener('click', (event)=>{
    event.preventDefault()
    grid1.replaceChildren()

    let brk2 = document.createElement('br');
    let wordo = document.createElement('h2');
    wordo.textContent = 'Notifications';
    let br = document.createElement('br');
    wordo.style.color = '#018749';
    wordo.style.textAlign = 'center';
    wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
    let divy = document.createElement('center');

    let loader = document.createElement('div');
    let secondDivEle = document.createElement('div');
    loader.className = 'loader';
    loader.style.display = 'hidden';
    secondDivEle.className = 'subDiv';

    divy.appendChild(brk2);
    divy.appendChild(wordo);
    divy.appendChild(loader);
    divy.appendChild(secondDivEle);
    list.appendChild(divy);
    grid1.appendChild(list);

    let appendSubDiv = document.querySelector('.subDiv');
    fetch('http://100092.pythonanywhere.com/api/get-product/')
    .then(resp=> resp.json()).then(data=> {
                let htmlString = '';
                if(appendSubDiv.childNodes.length === 0){
                loader.style.display = 'block';
            }
            data.map(function(notif){
                    htmlString += `<div style='float: left'>
                            <b><a href='#'>${notif.product_name}</a></b>
                            <p><b>${notif.title}</b></p>
                            <p style="font-size: 12px">${notif.created_at}</p> 
                            <hr></div>`

            })
            appendSubDiv.innerHTML = htmlString;
            loader.style.display = 'none';

    })

    grid1.style.visibility = 'visible';
    grid2.style.backgroundColor = 'transparent';
    grid1.style.overflow = 'scroll';
    body[0].style.width = '350px';
    body[0].style.backgroundColor='beige';
        }, {once : true});
