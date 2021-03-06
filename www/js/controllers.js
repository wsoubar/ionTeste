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

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SearchCtrl', function($scope) {

  $scope.verificaEIniciaApp = function(appID) {
      //var appID = "com.whatsapp";
      navigator.startApp.check(appID, function(message) { /* success */
          // se existe o app no aparelho então inicia o app
          alert("App encontrado com sucesso ["+appID+"]. Clique ok.");
          $scope.startApp(appID);
      }, 
      function(error) { /* error */
          // se não existe o app no aparelho abre a loja no aplicativo para download
          // $scope.startApp("com.android.vending", [appID]);
          if (confirm('App não foi encontrado. Abrir loja para download?')) {
              navigator.startApp.start([["action", "VIEW"], ["https://play.google.com/store/apps/details?id="+appID]], 
                function (message) {
                    console.log(message);
                },
                function (error) {
                    alert('Erro ao tentar abrir loja para app ['+appID+']: '+ error);
                }
              );
          }
      });
  };


  $scope.startApp = function(appID) {
      navigator.startApp.start(appID, function(message) {  /* success */
          console.log(message); // => OK
      }, 
      function(error) { /* error */
          console.log(error);
      });
  };


})
;
