var app = angular.module("rhysTechTest", []);

app.controller('MainController', function ($scope, $http) {

	$scope.setCurrentPerson = function (data) {
		$scope.person = data;
		$scope.LikesGreen = data.Colours.includes("Green");
		$scope.LikesBlue = data.Colours.includes("Blue");
		$scope.LikesRed = data.Colours.includes("Red");
	}
	
	$http.get("/Home/GetAllPeople")
		.then(function (response) {
			$scope.people = response.data;
		});
});