var app = angular.module('app', []);

app.controller('PostsCtrl', function($scope) {
    $scope.posts = [
        {
            username: 'csuhj',
            body: 'Post number 1'
        },
        {
            username: 'csuhj',
            body: 'Another post...'
        }
    ];
});