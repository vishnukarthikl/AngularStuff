angular.module('Twitter', ['ngResource']);

function twitterCtrl($scope, $resource) {
    $scope.twitter = $resource("http://search.twitter.com/:action",
        {action:"search.json", q:"angularjs", callback:'JSON_CALLBACK'},
        {get:{method:"JSONP"}}
    );

    $scope.search = function () {
        $scope.twitterResult = $scope.twitter.get({q:$scope.query});
    }

    $scope.clear = function () {
        $scope.twitterResult = {};
    }
}
