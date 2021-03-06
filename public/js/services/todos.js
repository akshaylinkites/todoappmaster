angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/todos');
			},
			create : function(todoData) {
				return $http.post('/api/todos', todoData);
			},
			update : function(id,todoData) {
				return $http.put('/api/todos/'+id, todoData);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]).factory('Posts', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/posts');
			},
			create : function(todoData) {
				return $http.post('/api/posts', todoData);
			},
			update : function(id,todoData) {
				return $http.put('/api/posts/'+id, todoData);
			},
			delete : function(id) {
				return $http.delete('/api/posts/' + id);
			}
		}
	}]);