'use strict';

/* Directives */

angular.module('spBlogger.posts.directives', []);

angular.module('spBlogger.posts.directives')
  .directive('spbComments', function(Post) {

  var link = function(scope, elem, attrs) {
    scope.saveComment = function() {
      var postID = scope.postInstance._id, savedPostInstance = {};
      scope.comment.datePublished = new Date();
      angular.copy(scope.postInstance, savedPostInstance);
      savedPostInstance.comments.unshift(scope.comment);
      scope.postInstance.comments.unshift(scope.comment);
      scope.comment = {};
      savedPostInstance.$update();
    };
  };

  return {
    restrict: 'AEC',
    replace: true,
    scope: {
      postInstance: '='
    },
    link: link,
    templateUrl: 'modules/posts/views/comments.html'
  };
});
