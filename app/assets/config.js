class Config {

    constructor($stateProvider, $urlRouterProvider){

        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/",
                controller : "MainCtrl as mainCtrl",
                templateUrl: "views/main.html"
            })
            .state('main', {
                url: "/main",
                templateUrl: "views/main.html"
            });

    }

}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
