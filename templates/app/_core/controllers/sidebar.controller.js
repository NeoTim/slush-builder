;(function(){
  'use struct';
  angular
    .module('core')
    .controller('SideBarCtrl', SideBarCtrl);
    /* @inject */
    function SideBarCtrl($scope, $location, $state, Auth) {

      $scope.isLoggedIn = Auth.isLoggedIn;

      $scope.isCollapsed = true;
      $scope.references = [
        {title: 'Angularjs Style Guide', link: 'https://github.com/johnpapa/angularjs-styleguide'}
      ];
      $scope.isActive = function(route) {
        return route === $state.current.name;
      };
    }

}).call(this);