angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope) {
})

.controller('ContactCtrl', function($scope) {
})

.controller('ContactSuccessCtrl', function($scope) {
})

.controller('CalendarCtrl', function($scope) {
})

.controller('RemindersCtrl', function($scope) {
})

.controller('LoginCtrl', function($scope) {
});
