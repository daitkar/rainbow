
function appViewRouteConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    var homeController = require('./components/home/homeController');
    var userInfoController = require('./components/user-info/user-info');
    var repoController = require('./components/repo/repo');
    var repoBranchController = require('./components/repo-branch/repo-branch');

    $urlRouterProvider.otherwise('/home/userInfo');
    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./components/home/home.html'),
            controller: homeController

        })
        .state('home.userInfo', {
            url: '/userInfo',
            template: require('./components/user-info/user-info.html'),
            controller: userInfoController

        })
        .state('home.repo', {
        url: '/datePick',
        template: require('./components/repo/repo.html'),
        controller: repoController

    })
        .state('home.repo-branch', {
            url: '/confirm',
            template: require('./components/repo-branch/repo-branch.html'),
            controller: repoBranchController
        })

}

module.exports = appViewRouteConfig;