'use strict';

/* jasmine specs for services go here */

describe('postService test\n', function(){
  beforeEach(module('spBlogger.posts.services'));

  it('Post service should return four post objects',
      inject(function(postService) {
        expect(postService.getAll().length).toBe(4);
  }));

  it('postService should return one object for id 2',
    inject(function(postService){
      var post=postService.getPostById(2);
      expect(post).not.toBe(undefined);
  }));

});

describe('PostController Test\n', function() {
  beforeEach(module('spBlogger.posts.controllers'));
  beforeEach(module('spBlogger.posts.services'));
  it('it should initialize the controller with four posts',
    inject(function($rootScope, $controller, postService) {
      var $scope = $rootScope.$new();
      $controller('PostController', {$scope: $scope, postService: postService});
      expect($scope.posts.length).toBe(4);
    }));
});

describe('PostDetailsController Test\n', function() {
  beforeEach(module('spBlogger.posts.controllers'));
  beforeEach(module('ui.router'));
  beforeEach(module('spBlogger.posts.services'));
  it('it should initialize the controller with four posts',
    inject(function($state, $stateParams, $rootScope, $controller, postService) {
      var $scope=$rootScope.$new();
      $stateParams.id=2;
      $controller('PostDetailsController',
      {$stateParams: $stateParams, $state: $state, $scope: $scope, postService: postService});
      expect($scope.singlePost).not.toBe(undefined);
    }));
});
