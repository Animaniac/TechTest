var rhysTechTest = angular.module("rhysTechTest", []);

rhysTechTest.controller('PeopleListController', function ($scope, $http) {
	$http.get("@Url.Action("GetAllPeople", "Home")")
		.then(function (response) {
			$scope.people = response.data;
		});
});

rhysTechTest.controller('UpdatePersonController', function ($scope, $http) {
	$http.get("@Url.Action("UpdatePerson", "Home")")
		.then(function (response) {
			$scope.person = response.data;
		});
});