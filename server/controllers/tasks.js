var mongoose = require('mongoose')
var Task = mongoose.model('Task')

module.exports = {
	getAll : function(req, res){
		Task.find({}, function(err, tasks){
			if(err){
				console.log(err)
			}else{
				res.json({tasks: tasks})
			}
		})
	},

	getOne : function(req, res){
		Task.find({_id : req.params.id}, function(err, task){
			if(err){
				console.log(err)
			}else{
				res.json({task: task})
			}
		})
	},

	add : function(req, res){
		console.log(req.body)
		var task = new Task({title : req.body.title, description : req.body.description})
		task.save(function(err){
			if(err){
				console.log(err)
				res.json({success : false})
			}else{
				res.json({success : true})
			}
		})
	},

	update : function(req, res){
		Task.update({_id : req.params.id}, {$set : {completed : req.body.completed}}, function(err){
			if(err){
				console.log(err)
				res.json({success:false})
			}else{
				res.json({success : true})
			}
		})
	},

	delete : function(req, res){
		Task.remove({_id:req.params.id}, function(err){
			if(err){
				console.log(err)
				res.json({success:false})
			}else{
				res.json({success : true})
			}
		})
	}
}