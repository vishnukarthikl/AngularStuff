function blogCtrl($scope) {

    $scope.blogPosts = [
        /* {name:"vishnu", content:"I posted my first hello world thing", rating:4, cool:false},
         {name:"pradisa", content:"I'm learning javascript", rating:5, cool:true},
         {name:"superman", content:"I go about saving the world", rating:1, cool:true}*/
    ]

    $scope.totalBlogPosts = $scope.blogPosts.length;

    $scope.addPost = function () {
        if ($scope.name === undefined) {
            $scope.nameError = "error";
            return;
        }
        if ($scope.content === undefined) {
            $scope.contentError = "error";
            return;
        }
        $scope.blogPosts.push({name:$scope.name, content:$scope.content, rating:$scope.rating, cool:$scope.cool, isSelected:false});
        $scope.name = "";
        $scope.content = "";
        $scope.rating = "";
        $scope.cool = false;
        $scope.totalBlogPosts = $scope.blogPosts.length;
    };

    $scope.remove = function () {
        $scope.blogPosts = _.filter($scope.blogPosts, function (post) {
            return !post.isSelected
        })
        $scope.totalBlogPosts = $scope.blogPosts.length;

    };
}

