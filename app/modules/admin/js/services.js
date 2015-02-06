angular.module('spBlogger.admin.services', []);

angular.module('spBlogger.admin.services')
  .factory('Post', function($resource, API_ENDPOINT) {
  return $resource(API_ENDPOINT, {id: '@_id'}, {
    update: {
      method: 'PUT'
    }
  });
});

angular.module('spBlogger.admin.services')
  .service('popupService', function($window) {
  this.showPopup = function(message) {
    return $window.confirm(message);
  }
});

angular.module('spBlogger.admin.services')
  .value('API_ENDPOINT', 'http://spblogger-sitepointdemos.rhcloud.com/api/posts/:id');
