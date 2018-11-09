const mongoose = require('mongoose'); 

const URI1 = 'mongodb://saaibi:Asd123456@ds211143.mlab.com:11143/testlpa';
const URI = 'mongodb://localhost/testlpa';

mongoose.connect(URI1, { useNewUrlParser: true }, (err, db) => {
	if (err) throw console.log(err);
	console.log(`DB is connected`)
});

module.exports = mongoose; 
