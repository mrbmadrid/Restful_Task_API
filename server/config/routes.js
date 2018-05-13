var mongoose = require('mongoose')
var Task = require('../controllers/tasks')

module.exports = function(app){

	app.get('/tasks', function(req, res){
		Task.getAll(req, res)
	})

	app.get('/tasks/:id', function(req, res){
		Task.getOne(req, res)
	})

	app.post('/tasks', function(req, res){
		console.log(req)
		Task.add(req, res)
	})

	app.put('/tasks/:id', function(req, res){
		Task.update(req, res)
	})

	app.delete('/tasks/:id', function(req, res){
		Task.delete(req, res)
	})

}