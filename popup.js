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
let checkbox = document.querySelector('.cbox');
let secure_uid = document.querySelector('.secret_uid');


window.onload = (event) => {
     body[0].style.width = '62px';     
     body[0].style.backgroundColor = '#f2f3f4';      
     console.log('PAGE DID LOAD');
      forSvg.style.display = 'none'; 
      forSvg1.style.display ='none'; 
      forSvg2.style.display = 'none';
};


let gen_uid = [];
let gen_user = [];
let gen_usernames = [];
let gen_length = [];
let exp = gen_user;


let save_uid_for_badge = new Array();
//window.save_user_for_badge = '';
let save_uid = new Array();
let save_usernames_for_badge = new Array();
let save_username = new Array();
let save_usernames = new Array();
let save_notif_length = new Array();


//To Get Username

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
                //console.log(`*Session ID Identified*: \nAnd it's ${get_theID}**`);        
                break
                //`break` allows us to use the first instance of theID only in the iteration.. 
                //incase there are more than 1 tabs with session_id.
            } }
            //Pass sessionID to Login Function            
                if(store_sessionID.length != 0){
                    let dict_SessionID = {'key': `${store_sessionID}`};
                fetch('https://100014.pythonanywhere.com/api/profile/', {
                          method: 'POST',
                          headers: {
                              'Accept': 'application/json, text/plain, */*',
                              'content-type':'application/json'
                                },          
                          body: JSON.stringify(dict_SessionID) })    
                .then(response => response.json())
                .then(json => {                                        
                    gen_user.push(json['username']);                    
                    //console.log(json);
                    //console.log(`***${gen_user}***`); 
                    //console.log(`**${json['username']}'s Role is ${json['role']}**`);
                    chrome.storage.local.set({ key: json['username']}).then(() => {
                            console.log(`Value is set to + ${json['username']}`);
                            });                  
        })
            }
            else {
                console.log('No Session ID Found');
            }                                  

   }); 


/*
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
        fetch('http://100092.pythonanywhere.com/api/get-product/')
        .then(resp=> resp.json())
        .then(data=> {            
            data.map(function(notif){                            
                    gen_usernames.push(notif.username);
                    let ems = [...gen_usernames].filter((c) => c).map((c) => c);
                    //console.log(`----${ems}`); 
                        for(const user of ems){
                           chrome.storage.local.get(["key"]).then((result) => {                                
                                if(user === result.key && (!notif.seen)){                                                                        
                                    gen_uid.push(notif.uid);
                                    console.log(`uids:: ${gen_uid}`);
                               } }) 
                       }  
            })                                    
        })                
}); 
*/


/*
chrome.storage.local.get(["key"]).then((result) => {
                      console.log("Value currently is " + result.key);
                    }); 
*/

//For Notification Tab
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
                break                
            } }
            //Pass sessionID to Login Function
            if(store_sessionID.length != 0){
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
                    save_username.push(json['username']);                                         
                    //console.log(json); 
                    //console.log(`${json['username']}'s Role is ${json['role']}`);
        })
            }
            else {
                console.log('No Session ID Found');
            }
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
                htmlString += `<div>                                                    
                            <b><a href='${pdct.product_url}' target='_blank'>${pdct.product_name}</a></b>                            
                            <img src="${icon}" style="float: left"/> <hr></div>`                
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
    let brk4 = document.createElement('br');
    let wordo = document.createElement('h2');
    wordo.textContent = 'Notifications';
    let br = document.createElement('br');
    wordo.style.color = '#018749';
    wordo.style.textAlign = 'center';
    wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
    let divy = document.createElement('center');

    if(save_username.length !== 0){
    
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
                    let getDate = notif.created_at.replace('T', ' ');
                    let cleanDate = getDate.substring(0, 16);
                    save_usernames.push(notif.username);                    

                    //Test if username from tab === username And if 'seen' is false in DB
                    for(const user of save_usernames){
                        if(user === save_username[0] && (!notif.seen)){
                            save_notif_length.push(user.length);
                            save_uid.push(notif.uid);
                    htmlString += `<div>
                            <small>
                            Product Name: <b><a href='#'>${notif.product_name}</a></b><br>
                            Title: <b>${notif.title}</b><br>
                            Message: <b>${notif.message}</b><br>                                            
                            ${cleanDate}<br>
                            <input type="hidden" value=${notif.uid} class="secret_uid"/>
                            <input type="checkbox" class="cbox"/> Mark as read
                            <hr width='120px'></small></div>`                                    
                            break                    

                }}                      
             })            
                //**Future feature**: checked event triggers a fetch request (PUT)...
                //to mark notifications as read/seen
                document.addEventListener('DOMContentLoaded', function () {
                checkbox.addEventListener('change', changeHandler);
                        });
                function changeHandler(){                        
                     getValue = secure_uid.value;
                    if(checkbox.checked){
                         console.log('Element Checked');
                         console.log(`SecureUID: ${getValue}`);                        
                         fetch('http://100092.pythonanywhere.com/api/get-product/',
                                         {   method:'POST',
                                            headers:{'Accept':'application/json,text/plain,*/*','content-type':'application/json'},
                                        body: JSON.stringify({'uid':`${getValue}`})}
                                      )
                         .then(res => res.json())
                         .then((data)=> {console.log(`Here's the data: ${data}`, `All's Good`)})
                            } 
                        else{
                            console.log("Couldn't Make PUT request");
                        }
                    };
                        

            //console.log(`UID: ${save_uid} \n USERNAME: ${save_username}`);
            //console.log(`Stored Usernames:${save_usernames}, ${save_usernames.length}`);
            //console.log(`UID Length:${save_uid.length}`);            

            appendSubDiv.innerHTML = htmlString;
            if(save_uid.length != 0){
                forSvg.style.display = 'block';
                forSvg1.style.display = 'block';
               forSvg2.style.display = 'block';
               forSvg2.innerHTML = save_uid.length;
        }            
            loader.style.display = 'none';
            
    })
    }
    else {
        let wordoo = document.createElement('h4');
        wordoo.textContent = 'Nothing to see here now.';
        wordoo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';

        let loader = document.createElement('div');
        let secondDivEle = document.createElement('div');
        loader.className = 'loader';
        loader.style.display = 'hidden';
        secondDivEle.className = 'subDiv';


        divy.appendChild(brk2);
        divy.appendChild(wordo);    
        divy.appendChild(secondDivEle);
         divy.appendChild(brk4);
        divy.appendChild(wordoo);
        list.appendChild(divy);
        grid1.appendChild(list);
        
    }
    
    grid1.style.visibility = 'visible';
    grid2.style.backgroundColor = 'transparent';
    grid1.style.overflow = 'scroll';
    body[0].style.width = '350px';
    body[0].style.backgroundColor='beige'; 
        
        }, {once : true});



enter.addEventListener('click', (event)=>{
    event.preventDefault()
    grid1.replaceChildren()
    
    let divy = document.createElement('center');
    let loader = document.createElement('div');
    let brk2 = document.createElement('br');
    let brk4 = document.createElement('br');
    let wordo = document.createElement('h2');
    let wordoo = document.createElement('p');        
    let brk = document.createElement('br');     
    let descLink = document.createElement('a'); 
    let btn = document.createElement('button'); 

    //let secondDivEle = document.createElement('div');
    if(save_username.length === 0){

        wordo.style.color = '#018749';
        wordo.textContent = 'Login';
        wordoo.style.color = 'red';        
        wordoo.textContent = 'You Need to Login'
        wordoo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
        descLink.target = '_blank';        
        descLink.href = 'http://100014.pythonanywhere.com';
        descLink.textContent = 'Click To Login';        
        
        btn.height = '20px';
        btn.className = 'chat-btn';
        btn.style.marginTop = '50px';
        btn.style.marginBottom = '50px';
        btn.style.marginRight = '70px';
        btn.style.marginLeft = '70px';
        btn.style.borderRadius = '6px'; 
        btn.style.width = '120px';                       

        divy.appendChild(brk2);
        divy.appendChild(wordo);                
        divy.appendChild(wordoo);
        btn.appendChild(descLink);            
        list.appendChild(divy);
        list.appendChild(btn);
        grid1.appendChild(list); 

        grid1.style.visibility = 'visible';
        grid2.style.backgroundColor = 'transparent';
        grid1.style.overflow = 'scroll';
        body[0].style.width = '350px'; 
        body[0].style.backgroundColor='beige';    
    }    
    else {
        wordo.style.color = '#018749';
        wordo.textContent = 'Login View';
        wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
        wordoo.style.color = '#018749';
        wordoo.textContent = `Welcome ${save_username}! You're logged in.`;
        wordoo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
        
        loader.className = 'loader';
        loader.style.display = 'block';    

        divy.appendChild(brk2);        
        divy.appendChild(wordo);    
        divy.appendChild(wordoo); 
        divy.appendChild(brk4);   
        divy.appendChild(brk);
        list.appendChild(divy);        
        grid1.appendChild(list); 

        grid1.style.visibility = 'visible';
        grid2.style.backgroundColor = 'transparent';
        grid1.style.overflow = 'scroll';
        body[0].style.width = '350px'; 
        body[0].style.backgroundColor='beige';    

        }
        

}, {once : true});