var Github = angular.module('Github', ['ngRoute', 'ngResource']);

Github.service('searchService', function () {
    this.search ='';
});



Github.controller('HomeController', ['$scope', '$http', 'searchService', function ($scope,$http, searchService) {
    $scope.search = searchService.search;
    $scope.id = null;
    $scope.name = null;
    $scope.url = null;

	//taking text search
    $scope.$watch('search', function (newValue, oldValue) {
        searchService.search = $scope.search;
    });


    $scope.isPrivate = function (val) {
        if (val === true) {
            return "fa fa-lock"
        } else {
            return "fa fa-unlock"
        }
    }

	//save data to bookmark
    $scope.bookmark = function (id, name, url) {
        var data = {
            id: id,
            name: name,
            url:url
        }

    };

	// get api  github with text search user
    $scope.searchBtn = function () {
        if ($scope.search.length > 0) {
            $http.get('https://api.github.com/search/repositories?q=' + $scope.search.replace(/\s+/g, '-').toLowerCase())
                .then(function (response) {
                    $scope.repositories = response;
                });
        }   
    }    
}]);