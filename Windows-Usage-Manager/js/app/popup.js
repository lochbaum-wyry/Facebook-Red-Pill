myApp.service('PageInfoService', function() {

});


myApp.controller("ConfigSitesCtrl", configSitesCtrl);

function configSitesCtrl($scope, PageInfoService, $localStorage) {
    var vm = this;

    vm.time = 2;

    vm.site = "";

    vm.addSite = addSite;

    vm.list = function(){if($localStorage.list == null) return []; else return $localStorage.list;}

    function addSite(){
        element = {'site': vm.site, 'time': vm.time};
        vm.list.push(element);
        $localStorage.list = vm.list;


    }
}



