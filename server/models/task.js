var mongoose = require('mongoose')

mongoose.Promise = global.Promise

var TaskSchema = new mongoose.Schema({
	title: {type: String, required: true},
	description: {type: String, default : ""},
	completed: {type: Boolean, default: false},
	created_at: {type: Date, default: Date.now()},
	updated_at: {type: Date, default: Date.now()}
})

TaskSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

mongoose.model('Task', TaskSchema)