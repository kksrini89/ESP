/// <reference path="angular.d.ts" />
/// <reference path="angular-ui-router.min.js" />
(function () {
    var app = angular.module('masterApp', ['ui.router']);
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/clientPerformance');
        $stateProvider.state('');
        //Client - Dashboard level        
        $stateProvider.state('clientDashboard', {
            // url:'/clientDashboard',
            url: "",
            // abstract : true,
            templateUrl: "clientDashboard.html"
        })
            .state('clientPerformance', {
                url: '/clientPerformance',
                parent: 'clientDashboard',
                template: '<h2>Client Performance</h2>'
            })
            .state('clientPortfolio', {
                url: '/clientPortfolio',
                abstract: true,
                parent: 'clientDashboard',
                views: {
                    "@": {
                        templateUrl: 'clientPortfolio.clientDashboard.html'
                    }
                }
            })
            .state('clientProjects', {
                url: '/clientProjects',
                parent: 'clientDashboard',
                template: '<h2>Client Projects</h2>'
            })
            .state('clientReports', {
                url: '/clientReports',
                parent: 'clientDashboard',
                template: '<h2>Client Reports</h2>'
            });

        //Portfolio level
        $stateProvider.state('portfolioPerformance', {
            url: '/portfolioPerformance',
            parent: 'clientPortfolio',
            template: '<h2>portfolio Performance</h2>'
        })
            .state('portfolioSites', {
                url: '/portfolioSites',
                parent: 'clientPortfolio',
                //abstract: true,
                views: {
                    "@": {
                        templateUrl: 'site.clientPortfolio.clientDashboard.html' //buildings.site.clientPortfolio.clientDashboard
                    }
                }
            })
            .state('portfolioProjects', {
                url: '/portfolioProjects',
                parent: 'clientPortfolio',
                template: '<h2>Portfolio Projects</h2>'
            })
            .state('portfolioReports', {
                url: '/portfolioReports',
                parent: 'clientPortfolio',
                template: '<h2>Portfolio Reports</h2>'
            });

        //Site level
        $stateProvider.state('sitePerformance', {
            url: '/sitePerformance',
            parent: 'portfolioSites',
            template: '<h2>Site Performance</h2>'
        })
            .state('siteProjects', {
                url: '/siteProjects',
                parent: 'portfolioSites',
                template: '<h2>Site Projects</h2>'
            })
            .state('siteReports', {
                url: '/siteReports',
                parent: 'portfolioSites',
                template: '<h2>Site Reports</h2>'
            })
            .state('siteBuildings', {
                url: '/siteBuildings',
                parent: 'portfolioSites',
                views: {
                    "@": {
                        templateUrl: 'buildings.site.clientPortfolio.clientDashboard.html'
                    }
                }
                //template: '<h2>Site Buildings</h2>'
            });

        //Buildings Level
        $stateProvider.state('buildingPerformance',{
            url:'/buildingPerformance',
            parent: 'siteBuildings',
            template:'<h2>Building Performance</h2>'
        })
            .state('buildingInfo',{
                url:'/buildingInfo',
                parent: 'siteBuildings',
                template:'<h2>Building Information</h2>'
            })
            .state('buildingProjects',{
                url:'/buildingProjects',
                parent: 'siteBuildings',
                template:'<h2>Building Projects</h2>'
            })
            .state('buildingReports',{
                url:'/buildingReports',
                parent: 'siteBuildings',
                template:'<h2>Building Reports</h2>'
            })
    }]);

//    app.value('$routerRootComponent','clientDashboard');

//    app.component('clientDashboard',{
//        template:'<h2>{{model.componentName}}</h2>',
//        controllerAs : 'model',
//        controller : function(){
//            var model = this;
//            model.componentName = 'ClientDashboard';
//        }
//    });  

}());