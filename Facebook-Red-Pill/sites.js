var PopupController = function () {
  this.site = document.getElementById('inputSite');
  this.button = document.getElementById('addSite');
  this.time = document.getElementById('inputTime');
  this.timer = document.getElementById('timer');
  this.loadScript("storage.js");
  this.addSite();
};

PopupController.prototype = {

  button: null,

  site: null,

  time: 0,

  addSite: function () {
    this.button.addEventListener('click', this.handleClick.bind(this));
  },

  handleClick: function () {
    addSite(this.site.value, this.time.value);

    this.removeFields();
  },

  removeFields: function(){
  	this.site.value = "";
  	this.time.value = 2;
  },


  validInputs: function () {
  	return (this.site != null);
  },

  loadScript: function (url){
  	var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    head.appendChild(script);

  }

};

document.addEventListener('DOMContentLoaded', function () {
  window.PC = new PopupController();
});