angular.module('hello-world').controller('playerCtrl', function($scope, rosterService, $stateParams){
  $scope.player = rosterService.findPlayerID($stateParams.id)
})
