var app = angular.module('musicLibrary');
app.controller('mainController', function ($scope, $location)
{
  $scope.isActive = function (viewLocation) {
    if (viewLocation === $location.path()){
      return true;
    }
      return viewLocation === $location.path();
    };
}
);
