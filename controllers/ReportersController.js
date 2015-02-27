beatDown.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)

  $scope.addReporter = function() {

    $scope.beat.reporters.push({
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      dateEmployed: $scope.dateEmployed,
      birthday: $scope.birthday
    });

    $scope.firstName = null;
    $scope.lastName = null;
    $scope.dateEmployed = null;
    $scope.birthday = null;
  };

 });
