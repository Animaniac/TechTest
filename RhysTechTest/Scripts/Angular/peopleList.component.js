angular.
	module("rhysTechTest").
	component("peopleList", {
		template:
			"<div>" +
				"<table>" +
					"<thead>" +
						"<tr>" +
							"<th>Name</th>" +
							"<th>Authorised</th>" +
							"<th>Enabled</th>" +
							"<th>Colours</th>" +
						"</tr>" +
					"</thead>" +
					"<tbody>" +
						"<tr ng-repeat=\"person in people\">" +
							"<td><a ng-click=\"setCurrentPerson(person.PersonId)\">{{ person.FirstName }} {{ person.LastName }}</a></td>" +
							"<td ng-class=\"{red: person.IsAuthorised == false, green: person.IsAuthorised == true}\" >{{ person.IsAuthorised ? \"Yes\" : \"no\" }}</td>" +
							"<td ng-class=\"{red: person.IsEnabled == false, green: person.IsEnabled == true}\">{{ person.IsEnabled ? \"Yes\" : \"no\" }}</td>" +
							"<td>{{ person.Colours }}</td>" +
						"</tr>" +
					"</tbody>" +
				"</table>" +
			"<div>",
		controller: function PeopleListController($scope, $http) {
			this.people =
				$scope.setCurrentPerson = function (id) {
				$scope.currentPerson = id;
			}

			$http.get("GetAllPeople", "Home")
			.then(function (response) {
			$scope.people = response.data;
			});
		}
	})


