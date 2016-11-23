
var app = angular.module('rainbow', [
    'ui.router',
    'ngMessages',
    'ui.select',
    'ui.bootstrap',
    'ngAnimate',
    'ngSanitize',
    'rainbow.globals',
    'rainbow.home'



]);
app.config(require('./appRouteConfig.js'));