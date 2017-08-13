var myApp = angular.module('myApp', ['ngRoute', 'peopleControllers']);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
		when('/List', {
			templateUrl: 'Partials/List.html',
		controller: 'ListController'
		}).
	otherwise({
		redirectTo: '/List'
	})
}]);

//myApp.controller('ListController', function ($scope, $http) {

//	$scope.setCurrentPerson = function (data) {
//		$scope.person = data;
//		$scope.LikesGreen = data.Colours.includes("Green");
//		$scope.LikesBlue = data.Colours.includes("Blue");
//		$scope.LikesRed = data.Colours.includes("Red");
//	}
	
//	$http.get("/Home/GetAllPeople")
//		.then(function (response) {
//			$scope.people = response.data;
//		});
//});