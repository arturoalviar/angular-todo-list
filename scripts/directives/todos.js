'use strict';

angular.module("todoListApp")
.directive('todos', function(){
  return {
    templateUrl: 'templates/todos.html',
    controller : 'mainCtrl', //applies ng-controller to template html
    replace: true //removes customs tags, in the case <todos> tag is gone from html file
  };
});
