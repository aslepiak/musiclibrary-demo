var app = angular.module('musicLibrary');
app.controller('albumsController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

//This is necessary for initial fade-in
$timeout(function () {
  $scope.loading = true;
}, 50);


  $http.get('data/albums.json')
      .then(function(res){
        $timeout(loaded, 1500);
        function loaded(){
         $scope.albums = res.data;
         $scope.loading = false;
      }
  });


}]);
