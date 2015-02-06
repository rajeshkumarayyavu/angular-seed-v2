'use strict';


// Declare app level module which depends on filters, and services
angular.module('spBlogger',
['ngResource', 'ui.router', 'spBlogger.posts', 'spBlogger.admin']);

angular.module('spBlogger').run(['$state', function($state) {
 $state.go('allPosts');
}]);
