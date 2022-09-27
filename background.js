/*
chrome.action.onClicked.addListener(async(tab)=>{
  try {
    const jquery = await (await fetch('https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js')).text();
    const css = await (await fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css')).text();
    const bootstrap = await (await fetch('https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js')).text();

    await chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
        allFrames: true
      },
      world: 'MAIN',
      args: [jquery],
      func: (jquery)=>{
        console.log(jquery);
        const script = document.createElement('script');
        script.textContent = jquery;
        document.body.appendChild(script);
      }
      ,
    });
    await chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
        allFrames: true
      },
      world: 'MAIN',
      args: [bootstrap],
      func: (bootstrap)=>{
        const script = document.createElement('script');
        script.textContent = bootstrap;
        document.body.appendChild(script);
      }
      ,
    });
    await chrome.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      css
    });
    await chrome.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      files: ['.style.css']
    });
  } catch (e) {
    console.error(e);
  }
}
);
*/
