'use strict';
/**
 * @ngdoc overview
 * @name xiangmuApp
 * @description
 * # xiangmuApp
 *
 * Main module of the application.
 */
angular
  .module('xiangmuApp', ["ui.router","ngCookies"]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
    $stateProvider.state("daohang",{
      url:"/daohang",
      templateUrl: "views/daohang.html",
      controller: "daohang"
    }).state("dengl",{
      url:"/dengl",
      templateUrl: "views/dengl.html",
      controller: "dengl"
    }).state("a",{
      url:"/a",
      templateUrl: "views/a.html",
      controller: "a"
    }).state("b",{
      url:"/b",
      templateUrl: "views/b.html",
      controller: "b"
    }).state("c",{
      url:"/c",
      templateUrl: "views/c.html",
      controller: "c"
    })

    $urlRouterProvider.when('','/dengl')
  }]);
