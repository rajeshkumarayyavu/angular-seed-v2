angular.module('spBlogger.posts',
['spBlogger.posts.controllers', 'spBlogger.posts.services', 'spBlogger.posts.directives']);

 angular.module('spBlogger.posts')
  .config(function($stateProvider, $locationProvider) {
    $stateProvider.state('allPosts', {
      url: '/posts',
      templateUrl: 'modules/posts/views/posts.html',
      controller: 'PostController'
    }).state('singlePost', {
      url: '/posts/:id/:permalink',
      templateUrl: 'modules/posts/views/singlePost.html',
      controller: 'PostDetailsController'
    });
});
