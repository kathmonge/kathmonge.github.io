var myApp = angular.module('myApp', []);

function onDeviceReady() {
  window.scrollTo(0,1);
}


myApp.controller('mainController',['$scope', '$timeout', function($scope, $timeout){
  

  $scope.home = "fadeInHome"
  $scope.aboutMe = "fadeOutAboutMe"
  $scope.proyects = "fadeOutProyects"
  $scope.proyect1 = "fadeOutProyect"
  $scope.proyect2 = "fadeOutProyect"
  $scope.proyect3 = "fadeOutProyect"
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

  $scope.toggleProyect1 = function(){
    $scope.proyect1 = "fadeInProyect"
  };


  $scope.toggleProyect2 = function(){
    $scope.proyect2 = "fadeInProyect"
  };

  $scope.toggleProyect3 = function(){
    $scope.proyect3 = "fadeInProyect"
  };

  $scope.closeProyect1 = function(){
    $scope.proyect1 = "fadeOutProyect"
  };

  $scope.closeProyect2 = function(){
    $scope.proyect2 = "fadeOutProyect"
  };

  $scope.closeProyect3 = function(){
    $scope.proyect3 = "fadeOutProyect"
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










