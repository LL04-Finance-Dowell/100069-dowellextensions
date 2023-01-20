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
let list_for_notif = document.createDocumentFragment();
let forSvg = document.querySelector('.SVGBadge-svg');
let forSvg1 = document.querySelector('.SVGBadge-svgBackground');
let forSvg2 = document.querySelector('.SVGBadge-number');
let closeView = document.querySelector('.close_tab1');
let closeView2 = document.querySelector('.close_tab2');


//Clean & efficient alternative to Get Session ID  
let cookieArray = [];
function logCookies(cookies) {
  for (const cookie of cookies) {    
    cookieArray.push(cookie.value)    
    chrome.storage.sync.set({ key: cookieArray[0]}).then(() => {
                            console.log(`Magic Cookie Set`);
                            });
  }
  console.log(`There is (are) ${cookieArray.length} stored cookies with the name 'sessionid'!`);
} 
// API to read all cookies stored in browser with the name 'sessionid'
chrome.cookies
  .getAll({
    name: "sessionid",
  })
  .then(logCookies);

//Retrieve Cookie AKA Session ID
chrome.storage.sync.get(["key"]).then((response) => {
    console.log("***Magic Cookie is " + response.key +"***");
        });











window.onload = (event) => {    
     body[0].style.width = '62px';     
     body[0].style.backgroundColor = '#f2f3f4';        
     console.log('PAGE DID LOAD');
      forSvg.style.display = 'none'; 
      forSvg1.style.display ='none'; 
      forSvg2.style.display = 'none';      
      closeView.style.display = 'none';
      //console.log(window.location.origin);     
};

closeView.addEventListener('click', (event)=>{
      event.preventDefault()
      body[0].style.width = '62px';
      closeView.style.display = 'none';           
      grid1.style.visibility = 'hidden';      
      });
closeView2.addEventListener('click', (event)=>{
      event.preventDefault()
      body[0].style.width = '62px'; 
      closeView.style.display = 'none';      
      window.open('', '_self', '');
      window.close();
      });

//Global Variables
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
                            console.log(`Welcome ${json['username']}`);
                            });                  
        })
            }
            else {
                console.log('No Session ID Found');
            }                                  

   }); 


//For Notification Tab
chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
        let store_tabs = [];
        let store_sessionID = [];
        //Read all urls of opened tabs and get the one with 'sessionID, if any'
        for(let i = 0; i < tabs.length; i++) {                                        
                    store_tabs.push(tabs[i].url);                    
        }         
        for(let theID of store_tabs){                        
            if(theID.includes('session_id') === true){
                let get_theID = theID.split('session_id=')[1];                
                store_sessionID.push(get_theID);                
                console.log(`Session ID Identified:${get_theID}`);        
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
 	descLink.src = 'https://ll07-team-dowell.github.io/DowellJobPortal/#?session_id=';
    //descLink.src = 'http://100014.pythonanywhere.com';
    //descLink.referrerpolicy="no-referrer";
    descLink.height = '780px'; 	
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
    grid1.style.overflowX= 'hidden';
    body[0].style.width = '350px';     
    body[0].style.backgroundColor='#ecf5ee';
    closeView.style.display = 'block'; 
    closeView2.style.display = 'block'; 

 }, {once : true});   



prod.addEventListener('click', (event)=>{
    event.preventDefault()
    grid1.replaceChildren()
            
    let wordo = document.createElement('h2');    
    wordo.textContent = 'Products';
    let br = document.createElement('br');
    wordo.style.color = '#018749';
    wordo.style.textAlign = 'center';
    //wordo.style.marginLeft = '-50px';    
    wordo.style.margin = '25px';    
    wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
    let divy = document.createElement('center');        
    let loader = document.createElement('div');
    let secondDivEle = document.createElement('div');
    
    loader.className = 'loader';
    loader.style.display = 'hidden';
    secondDivEle.className = 'subDiv';
        
    divy.appendChild(wordo);
    divy.appendChild(loader);
    divy.appendChild(secondDivEle);
    list.appendChild(divy); 
    grid1.appendChild(list);
       
    let appendSubDiv = document.querySelector('.subDiv');
    //appendSubDiv.innerHTML = '<br><br><h7 style="color:#018749; font-family:Courier New;background-color:#ecf5ee;width:20px border-radius:60px;"><b>Request May Take a Little While, Please Wait.</b></h7>';                        
     
    appendSubDiv.style.display = 'grid';
    appendSubDiv.style.gridTemplateColumns = '33% 33% 33%';
        

    fetch('https://100092.pythonanywhere.com/product/get-all-data')
    .then(resp=> resp.json()).then(datar=> {
            let htmlString = '';            
            if(appendSubDiv.childNodes.length === 0){
                loader.style.display = 'block';                
            }                    
            datar.normal.data[0].map((pdct)=> {

                const divContainer = document.createElement('div');

                divContainer.innerHTML = pdct.product_logo;

                const svgs = divContainer.getElementsByTagName('svg');
                svgs[0].setAttribute('height', "100");
                svgs[0].setAttribute('width', "100");
            
                htmlString += `<div>                                                                         
                                    <a class="product" href='${pdct.product_url}' target='_blank' style='display:flex;'>                                
                                       ${divContainer.innerHTML}
                                    </a>                                                                                               
                                    <a href='${pdct.product_url}' target='_blank'>
                                    <small style="font-size: 12px; font-family:Courier New, monospace; color: red;">
                                    <b>${pdct.product_name}</b></small>
                                    </a> 
                                    </div>`           
            })           
            appendSubDiv.innerHTML = htmlString;             
            loader.style.display = 'none';
    }); 
    grid1.style.visibility = 'visible';
    grid2.style.backgroundColor = 'transparent';
    grid1.style.overflow = 'scroll';
    grid1.style.overflowX= 'hidden';
    body[0].style.width = '350px';    
    body[0].style.backgroundColor='#ecf5ee';
    closeView.style.display = 'block'; 
    closeView2.style.display = 'block';     
    
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
  //body[0].style.backgroundColor='beige';
  body[0].style.backgroundColor='#ecf5ee';
  grid1.style.overflowX= 'hidden';
  closeView.style.display = 'block'; 
  closeView2.style.display = 'block';  
 

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
                grid1.style.overflowX= 'hidden';
                body[0].style.width = '350px'; 
                //body[0].style.backgroundColor='beige';
                body[0].style.backgroundColor='#ecf5ee';
                closeView.style.display = 'block'; 
                closeView2.style.display = 'block'; 
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
                //window.getValue ='';                 
                if(appendSubDiv.childNodes.length === 0){
                loader.style.display = 'block';
                    }                   
            data.map(function(notif){
                    let getDate = notif.created_at.replace('T', ' ');
                    let cleanDate = getDate.substring(0, 16);
                    save_usernames.push(notif.username);
                    window.getUidLength = save_uid.length;                                       
                    //Test if username from tab === username And if 'seen' is false in DB
                    for(const user of save_usernames){                        
                        if(user === save_username[0] && (!notif.seen)){
                            save_notif_length.push(user.length);
                            save_uid.push(notif.uid);                             
                   
                    htmlString += `<div style="background-color:#ecf5ee; border-radius: 12px;">
                            <small>
                            <b><a href='#'>${notif.product_name}</a></b><br>
                            ${notif.title}<br>
                            <small><b>${notif.message}</b></small><br>                                            
                            <small><code>${cleanDate}</code></small><br>
                            <input type="hidden" value=${notif.uid} class="secret_uid" id=item_${getUidLength++}/>
                            <button class='btx'>Mark as Read</button>
                            </small><br><br></div><br>`                            
                            break 

                           
                }}
             })//map statment closes here
                
                /*document.addEventListener('DOMContentLoaded', function () {
                checkbox.addEventListener('CheckboxStateChange', changeHandler);
                        }); */                                      

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
            else{
                appendSubDiv.innerHTML = `<br><br><h3>No Notification</h3>`
            }            
            loader.style.display = 'none';
                        
            window.btx = document.querySelectorAll('.btx');
            let secure_uid = document.querySelectorAll('.secret_uid'); 
            
            btx.forEach(addListener);  

            function addListener(data, index){
                console.log(data);                
                btx[index].addEventListener('click', (event)=>{
                    event.preventDefault()
                    changeHandler(secure_uid[index], index)
                    })

            };                   


    })//then statement closes here
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
    grid1.style.overflowX= 'hidden';
    body[0].style.width = '350px';
    //body[0].style.backgroundColor='beige';
    body[0].style.backgroundColor='#ecf5ee';
    closeView.style.display = 'block'; 
    closeView2.style.display = 'block'; 
    
        
        }, {once : true});

 function changeHandler(process_uid, index){ 
        let getValue = process_uid.value;
        console.log(getValue);
        fetch('http://100092.pythonanywhere.com/api/get-product/',
        {   method:'PUT',
            headers:{'Accept':'application/json,text/plain,*/*','content-type':'application/json'},
            body: JSON.stringify({'uid':`${getValue}`})})
        .then(res => res.json())
        .then((data)=> {console.log(`Here's the data: ${data}, All's Good`)}) 
        btx[index].innerHTML = '<b>Already Read</b>'
 }



user_details.addEventListener('click', (event)=>{
    event.preventDefault()
    grid1.replaceChildren()

        chrome.storage.sync.set({ key: save_username.toString() }).then(() => {
          //console.log("Username Identified: " + save_username.toString());
        });
    
    let divy = document.createElement('center');
    let loader = document.createElement('div');
    let brk2 = document.createElement('br');
    let brk4 = document.createElement('br');
    let wordo = document.createElement('h2');
    let wordoo = document.createElement('p');        
    let brk = document.createElement('br');       
    let descLink = document.createElement('a'); 
    let btn = document.createElement('button'); 

    chrome.storage.sync.get(["key"]).then((result) => {        
    //if(save_username.length === 0){
        if(result.key.length === 0){

        wordo.style.color = '#018749';
        wordo.textContent = 'Login';
        wordoo.style.color = 'red';        
        wordoo.textContent = 'Only Logged In Users Can See Details'
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
        grid1.style.overflowX= 'hidden';
        body[0].style.width = '350px';         
        body[0].style.backgroundColor='#ecf5ee';    
    }    
    else {
        wordo.style.color = '#018749';
        wordo.textContent = 'User Details';
        wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
        wordoo.style.color = '#018749';
        wordoo.textContent = `${result.key}'s Details`;
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
        grid1.style.overflowX= 'hidden';
        body[0].style.width = '350px'; 
        //body[0].style.backgroundColor='beige';
        body[0].style.backgroundColor='#ecf5ee';
        closeView.style.display = 'block'; 
        closeView2.style.display = 'block'; 
        }
        });
        

}, {once : true});


enter.addEventListener('click', (event)=>{
    event.preventDefault()
    grid1.replaceChildren()

        chrome.storage.sync.set({ key: save_username.toString() }).then(() => {
          console.log("Session Username: " + save_username.toString());
        });
       // chrome.storage.session.get(["key"]).then((result) => {
         // console.log("Session Username is: " + result.key);
        //});
    
    let divy = document.createElement('center');
    let loader = document.createElement('div');
    let brk2 = document.createElement('br');
    let brk4 = document.createElement('br');
    let wordo = document.createElement('h2');
    let wordoo = document.createElement('p');        
    let brk = document.createElement('br');       
    let descLink = document.createElement('a'); 
    let btn = document.createElement('button');
    let anchor_logout = document.createElement('a');
    let btn_logout = document.createElement('button');

    //let secondDivEle = document.createElement('div');
    chrome.storage.sync.get(["key"]).then((result) => {        
    //if(save_username.length === 0){
        if(result.key.length === 0){

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
        grid1.style.overflowX= 'hidden';
        body[0].style.width = '350px';         
        body[0].style.backgroundColor='#ecf5ee';
        closeView.style.display = 'block'; 
        closeView2.style.display = 'block';    
    }    
    else {
        wordo.style.color = '#018749';
        wordo.textContent = 'Login View';
        wordo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
        wordoo.style.color = '#018749';
        wordoo.textContent = `Welcome ${result.key}! You're logged in.`;
        wordoo.style.fontFamily = 'Andale Mono, monospace, Courier New, monospace';
        anchor_logout.href = 'https://100093.pythonanywhere.com/logout';        
        anchor_logout.target= '_blank'
        btn_logout.textContent = 'Log Out';

        loader.className = 'loader';
        loader.style.display = 'block';    

        divy.appendChild(brk2);        
        divy.appendChild(wordo);    
        divy.appendChild(wordoo); 
        divy.appendChild(brk4);           
        divy.appendChild(brk); 

        anchor_logout.appendChild(btn_logout);
        divy.appendChild(anchor_logout);

        list.appendChild(divy);        
        grid1.appendChild(list); 

        grid1.style.visibility = 'visible';
        grid2.style.backgroundColor = 'transparent';
        grid1.style.overflow = 'scroll';
        grid1.style.overflowX= 'hidden';
        body[0].style.width = '350px';         
        body[0].style.backgroundColor='#ecf5ee';
        closeView.style.display = 'block'; 
        closeView2.style.display = 'block'; 
        }
        });
        

}, {once : true});

