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
        console.log('value updated!');
    });

    $scope.$watch(function () {
        return ctrl.country;
    }, function (newValue, oldValue) {
        console.log('value updated!');
    }, true);

}

angular
	.module('app')
	.controller('UserController', UserController);