angular.module("todoListApp")
.service('dataService',function(){
  
  this.deleteTodo = function(todo){
      console.log("The " + todo.name + " has been deleted");
  };

  this.saveTodo = function(todo){
      console.log("The " + todo.name + " has been saved");
  };
});
