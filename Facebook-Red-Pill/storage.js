var sites = [];

function addSite(site, time){
	var value = {'site': site, 'time': time};
	

	getSites();


	this.sites.push(value);
	console.log(this.sites);
	
	chrome.storage.local.set({'sites': this.sites});
}


function getSites(){
	chrome.storage.local.get(null, function(data) {
			this.sites = data.sites.slice();
    	});
}