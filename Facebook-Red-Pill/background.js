chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) { //Colocamos la extension a la escucha de que una pagina Web sea visitada o actualizada.
	
	if(tab.url.indexOf("facebook") != -1){
		alert("Estas visitando la pagina facebook");
		startTimer()
	}
	else 
		{
			resetTimer()
		}
	
});

function startTimer(){
	
}

function resetTimer(){

}

//chrome.tabs.onUpdated.addListener(function(tab, estado) { //Colocamos la extension a la escucha de que una pagina Web sea visitada o actualizada.
//    if(estado.status == 'complete'){ //Si la pagina se ha terminado de cargar
//            chrome.tabs.executeScript(tab.id, {'file':'timer.js'}); //Inyecta el código del fichero inyeccion.js
//} 