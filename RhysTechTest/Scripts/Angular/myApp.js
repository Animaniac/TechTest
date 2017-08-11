var app = angular.module("rhysTechTest", []);

app.controller('MainController', function ($scope, $http) {

	$scope.setCurrentPerson = function (data) {
		$scope.person = data;
		console.log(data)
	}

	$http.get("GetAllPeople", "Home")
		.then(function (response) {
			$scope.people = response.data;
		});
});