function UserController($scope) {
	var ctrl = this
  ctrl.username = '';

	ctrl.country = {
		name: {
      
		}
	};
    $scope.$watchCollection(function () {
        return ctrl.username;
    }, function (newValue, oldValue) {
        console.log('username updated!');
    });

    $scope.$watch(function () {
        return ctrl.country;
    }, function (newValue) {
        console.log('country updated!');
    }, true);


    $scope.$watchCollection(function () {
      return ctrl.country.name;
    }, function (newValue) {
      console.log('country name updated');
    });


}

angular
	.module('app')
	.controller('UserController', UserController);