angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('VentasCtrl', function($scope, $stateParams, $http) {
  /*
  $http.get('http://127.0.0.1:8080/comparahora/public/api/ventas').success(function(ventas){
      $scope.ventas = ventas;
  });*/

  $scope.ventas = [{"status":"Activo","status_llamada":null,"nombre":"Carlos","apellido":"Cuamatzin","celular":"2225630362","smartphone":"Apple iPhone 4S 32GB","plan":"TELCEL PRO 200"},{"status":"Buro de Cr\u00e9dito","status_llamada":null,"nombre":"Carlos","apellido":"Cuamatzin","celular":"2225630362","smartphone":"Apple iPhone 4S 32GB","plan":"TELCEL PRO 200"},{"status":"Activo","status_llamada":2,"nombre":"Carlos","apellido":"Cuamatzin","celular":"2225630362","smartphone":"Apple iPhone 4S 32GB","plan":"TELCEL PRO 200"},{"status":"Activo","status_llamada":3,"nombre":"Carlos","apellido":"Cuamatzin","celular":"2225630362","smartphone":"Apple iPhone 4S 32GB","plan":"TELCEL PRO 200"},{"status":"Aprobado","status_llamada":null,"nombre":"Carlos","apellido":"Cuamatzin","celular":"2225630362","smartphone":"LG G3","plan":"Plan Vas a Volar 1.5 GB"},{"status":"Activo","status_llamada":2,"nombre":"Carlos","apellido":"Cuamatzin","celular":"2225630362","smartphone":"Apple iPhone 4S 32GB","plan":"TELCEL PRO 200"},{"status":"Activo","status_llamada":2,"nombre":"Carlos","apellido":"Cuamatzin","celular":"2225630362","smartphone":"Apple iPhone 6 Plus 64GB","plan":"Plan 800"}];
  console.log($scope.ventas);
});
