var myApp = angular.module('myApp', []);

function onDeviceReady() {
  window.scrollTo(0,1);
}


myApp.controller('mainController',['$scope', '$timeout', function($scope, $timeout){
  

  $scope.home = "fadeInHome"
  $scope.aboutMe = "fadeOutAboutMe"
  $scope.proyects = "fadeOutProyects"
  $scope.proyect = "fadeOutProyect"
  $scope.contact = "fadeOutContact"
  $scope.itemAboutMe = "inactiveAboutMe"
  $scope.itemProyects = "inactiveProyects"
  $scope.itemContact = "inactiveContact"


  $scope.toggleHome = function(){
    $scope.home = "fadeInHome"
    $scope.aboutMe = "fadeOutAboutMe"
    $scope.proyects = "fadeOutProyects"
    $scope.contact = "fadeOutContact"
    $scope.itemAboutMe = "inactiveAboutMe"
    $scope.itemProyects = "inactiveProyects"
    $scope.itemContact = "inactiveContact"

  };

  $scope.toggleAboutMe = function(){
    $scope.contact = "fadeOutContact"
    $scope.proyects = "fadeOutProyects"
    $scope.aboutMe = "fadeInAboutMe"
    $scope.home = "fadeOutHome"    
    $scope.itemAboutMe = "activeAboutMe"
    $scope.itemProyects = "inactiveProyects"
    $scope.itemContact = "inactiveContact"
  };

  $scope.toggleProyects = function(){
    $scope.contact = "fadeOutContact"
    $scope.aboutMe = "fadeOutAboutMe"
    $scope.proyects = "fadeInProyects"
    $scope.home = "fadeOutHome"
    $scope.itemProyects = "activeProyects"
    $scope.itemAboutMe = "inactiveAboutMe"
    $scope.itemContact = "inactiveContact"
  };

  $scope.toggleProyect = function(){
    $scope.proyect = "fadeInProyect"
  };

  $scope.toggleContact = function(){
      $scope.proyects = "fadeOutProyects"
      $scope.aboutMe = "fadeOutAboutMe"
      $scope.contact = "fadeInContact"
      $scope.home = "fadeOutHome"
      $scope.itemContact = "activeContact"
      $scope.itemAboutMe = "inactiveAboutMe"
      $scope.itemProyects = "inactiveProyects"
  };
}]);










