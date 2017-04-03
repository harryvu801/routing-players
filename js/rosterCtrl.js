angular.module('hello-world').controller('rosterCtrl', function ($scope, rosterService) {
  $scope.roster = "rosters!!"

  $scope.players = rosterService.getPlayers();


})
