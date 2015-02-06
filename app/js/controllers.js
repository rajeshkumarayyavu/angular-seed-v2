var app = angular.module('myApp.controllers', []);

angular.module('myApp.controllers').controller('SiteController', function($scope, greet) {
  $scope.name = "site controller";
  $scope.greet = greet('rajesh');
});

angular.module('myApp.controllers').controller('BookController', function($scope, $timeout) {

  $scope.books = ['Jump start css', 'Jump start html', 'Jump start responsive'];
  $scope.name = "book controller";
  $scope.wishListCount = 0;
  $scope.message = "";
  $scope.addToWishList = function(book) {
    $scope.wishListCount++;
  };
  $scope.scheduleTask = function() {
    $timeout(function() {
        $scope.message = "Fetched after 3 seconds";
        console.log('message='+$scope.message);
    }, 3000);
  };
  $scope.$watch('wishListCount', function(newvalue, oldvalue) {

    console.log('called '+ newvalue + 'times');
    if(newvalue == 2) {
        alert("You have added 2 new items. Its time to buy");
    }
  });
});

angular.module('myApp.controllers').controller('MessageController', function($rootScope, $scope, $timeout) {

  $rootScope.messages = [{
    sender: 'user1',
    text: 'Message1'
  }];
  var timer;
  var count=0;
  $scope.loadMessages = function() {
    count++;
    $rootScope.messages.push({
      sender: 'user1',
      text: 'Random message'+count
    });
    timer=$timeout($scope.loadMessages, 2000);
    if(count==3){
      $rootScope.$broadcast('EVENT_NO_DATA', 'Not Connected');
      $timeout.cancel(timer);
    }
  };
  timer=$timeout($scope.loadMessages, 2000);
  $rootScope.$on('EVENT_RECEIVED', function() {
    console.log("event received");
  });
});

angular.module('myApp.controllers').controller('StatsController', function($rootScope, $scope) {
  $scope.name = "rajesh";
  $scope.status = 'connected';
  $scope.statusColor = "green";
  $rootScope.$on('EVENT_NO_DATA', function(event, data) {
    $scope.status = data;
    $scope.statusColor = 'red';
    $rootScope.$emit('EVENT_RECEIVED');
  });
});

angular.module('myApp.controllers').controller('Controller1', function($scope, $location, $state) {
  $scope.loadView2 = function() {

      $state.go('view2', {
        firstname: $scope.firstname,
        lastname: $scope.lastname
      });
  };
});

angular.module('myApp.controllers').controller('Controller2', function($scope, $routeParams, $location, names) {
  $scope.firstName = $routeParams.firstname;
  $scope.lastName = $routeParams.lastname;
  $scope.names = names;
  var data = $location.search();
  $scope.value1 = data.key;
  $scope.value2 = data.key2;
});
