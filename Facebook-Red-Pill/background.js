
// var cu = [ { url: facebook, duration:  120  } ]; 
// var rp = new FbRedPill(cu) ; 


chrome.webNavigation.onCompleted.addListener(function(e) {
	// propiedades de 'e': tabId, url, processId, frameId, timeStamp

	//var conf = rp.getConfUrl(e.url); 
	//if ( conf.url !== null )  
	chrome.tabs.executeScript(e.tabId, {'file':'timerScript.js'}); //Inyecta el código del fichero inyeccion.js

});


//chrome.tabs.onUpdated.addListener(function(tab, estado) { //Colocamos la extension a la escucha de que una pagina Web sea visitada o actualizada.
//    if(estado.status == 'complete'){ //Si la pagina se ha terminado de cargar
//            chrome.tabs.executeScript(tab.id, {'file':'timer.js'}); //Inyecta el código del fichero inyeccion.js
//} 

// function FbRedPill() 
// {
// 	this.tabUrl = {} ; 
	
// 	this.setTabUrl = function(id, url) { this.tabUrl.id = url; };
// 	this.getTabUrl = function(id) { return this.tabUrl.id === undefined ? null : this.tabUrl.id ; };
// }