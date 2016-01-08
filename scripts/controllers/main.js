'use strict';

angular.module("todoListApp")
.controller('mainCtrl', function($scope){

  $scope.todos = [];

  $scope.addTodo = function(){
    var todo = {name: "Make a new todo item! Click to edit me!"};
    $scope.todos.unshift(todo);
  };

  $scope.deleteTodo = function(todo, $index){
    $scope.todos.splice($index, 1);
  };

  $scope.submitItemWithEnter = function(keyEvent){
    if (keyEvent.which === 13){
      $scope.editing = false;
    }
  }
});
