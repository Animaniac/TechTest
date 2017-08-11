var app = angular.module("rhysTechTest", []);

app.controller('PeopleListController', function ($scope, $http) {
	$http.get("GetAllPeople", "Home")
		.then(function (response) {
			$scope.people = response.data;
		});
});

//app.controller('EditPersonController', function ($scope, $http, ) {
//	editPerson = function()
//});