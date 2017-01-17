document.writeln("<script type='text/javascript' src='easytimer.js-master/dist/easytimer.min.js'></script>");
document.writeln("<script type='text/javascript' src='jquery.min.js'></script>");

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) { //Colocamos la extension a la escucha de que una pagina Web sea visitada o actualizada.

	if(tab.url.indexOf("facebook") != -1){
		startTimer()
	}
	
});

    
function startTimer(){
	var timer = new Timer();
	timer.start();
	timer.addEventListener('secondsUpdated', function (e) {
    	$('#basicUsage').html(timer.getTimeValues().toString());
	});
}


//chrome.tabs.onUpdated.addListener(function(tab, estado) { //Colocamos la extension a la escucha de que una pagina Web sea visitada o actualizada.
//    if(estado.status == 'complete'){ //Si la pagina se ha terminado de cargar
//            chrome.tabs.executeScript(tab.id, {'file':'timer.js'}); //Inyecta el código del fichero inyeccion.js
//} 