function TodoCtrl($scope) {
	$scope.todos = [];

	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	};

	$scope.getUndoneTodos = function(){
		count = 0;
		angular.forEach($scope.todos, function(task){
			count += task.done ? 0 : 1;
		});
		return count;
	}

	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.formTodoText, done:false });
		$scope.formTodoText = '';
	};

	$scope.clearCompleted = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
		if (!todo.done) $scope.todos.push(todo);
    });
  };
}