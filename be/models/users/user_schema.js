let mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')
const server = '127.0.0.1:27017'
const database = 'sarc'
mongoose.connect("mongodb+srv://Tejo:pass123@sarcdb-6vxmj.mongodb.net/sarc?retryWrites=true&w=majority", {
    useNewUrlParser: true
});
let user_model = new mongoose.Schema({
	username: {
		type: 'String'
	},
	password: {
		type: 'String'
	},
	emailid: {
		type: 'String'
	}
})
user_model.plugin(timestamp)
module.exports = mongoose.model('user',user_model)