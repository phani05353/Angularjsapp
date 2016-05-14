var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var fileSchema = new Schema({

	creator: {type: Schema.types.ObjectId, ref: 'User'},
	content: String,
	created: { type: Date, defauly: Date.now}

});

module.exports = mongoose.model('File', fileSchema);