angular.module('spBlogger.admin',
  ['spBlogger.admin.controllers', 'spBlogger.admin.services']);

  angular.module('spBlogger.admin')
  .config(function($stateProvider) {
  $stateProvider.state('admin', {
    url: '/admin',
    abstract: true,
    controller: 'PostController',
    templateUrl: 'modules/admin/views/admin-home.html'
  }).state('admin.postNew', {
    url: '/posts/new',
    controller: 'PostCreationController',
    templateUrl: 'modules/admin/views/admin-new-post.html'
  }).state('admin.postUpdate', {
    url: '/posts/:id/edit',
    controller: 'PostUpdateController',
    templateUrl: 'modules/admin/views/admin-update-post.html'
  }).state('admin.postViewAll', {
    url: '',
    controller: 'PostListController',
    templateUrl: 'modules/admin/views/admin-all-posts.html'
  });
});
