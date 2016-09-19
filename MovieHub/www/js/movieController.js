angular.module('myAPP', ['ionic'])
.controller('MovieController', function($scope, $http,$ionicPopup, $timeout) {
     $http.get("https://api-public.guidebox.com/v1.43/US/mBgbFjzVsdUCxXM8C0dpFs9ICQB0ZJ/movies/all/50/25/all/all")
    .then(function(response) {
		
        $scope.searchResults=response.data.results;
    });

});