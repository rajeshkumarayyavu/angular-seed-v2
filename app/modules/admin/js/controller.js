angular.module('spBlogger.admin.controllers', []);

angular.module('spBlogger.admin.controllers')
  .controller('PostCreationController', function($scope, $state, Post) {

  $scope.post = new Post();
  $scope.buttonText = 'Create';
  $scope.savePost = function() {
    $scope.buttonText = "Saving ...";
    $scope.post.permalink = angular.lowercase($scope.post.title).replace(/[\s]/g,'-');
    $scope.post.$save(function() {
      $state.go('admin.postViewAll');
    });
  };
});

angular.module('spBlogger.admin.controllers')
  .controller('PostUpdateController', function($scope, Post, $stateParams, $state) {

  $scope.post = Post.get({id:$stateParams.id});
  $scope.buttonText = "Update";
  $scope.updatePost = function() {
    $scope.buttonText = 'Updating ...';
    $scope.post.$update(function() {
      $state.go('admin.postViewAll');
    });
  };
});

angular.module('spBlogger.admin.controllers')
  .controller('PostListController', function($scope, Post, popupService, $state) {

  $scope.posts = Post.query();
  $scope.deletePost = function(post) {
    if(popupService.showPopup('Really delete this?')) {
      post.$delete(function() {
        $state.go('admin.postViewAll', undefined, {
          reload: true
        });
      });
    }
  };
});

angular.module('spBlogger.admin.controllers')
  .controller('PostController', function($scope, Post) {
  $scope.posts = Post.query();
});

angular.module('spBlogger.admin.controllers')
  .controller('PostDetailsController', function($scope, $state, $stateParams, Post) {
  $scope.singlePost = Post.get({id: $stateParams.id});
  $scope.closePost = function() {
    $state.go('allPosts');
  };
});
