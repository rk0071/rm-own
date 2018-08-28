const mongoose = require('mongoose')
mongoose.connect('process.env.MONGODB_URI || process.env.MONGOLAB_GRAY_URI || mongodb://localhost:27017/long');
