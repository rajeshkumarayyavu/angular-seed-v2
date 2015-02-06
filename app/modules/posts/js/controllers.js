'use strict';

/* Controllers */

angular.module('spBlogger.posts.controllers', []);

angular.module('spBlogger.posts.controllers')
  .controller('PostController', function($scope, postService) {
   $scope.getAllPost = function() {
     return postService.getAll();
   };
   $scope.posts = $scope.getAllPost();
});

angular.module('spBlogger.posts.controllers')
  .controller('PostDetailsController', function($stateParams, $state, $scope, postService) {
  $scope.getPostById = function(id) {
    return postService.getPostById(id);
  };

  $scope.singlePost = $scope.getPostById($stateParams.id);

  $scope.closePost = function() {
    $state.go('allPosts');
  };
});
