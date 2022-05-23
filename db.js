const mongoose = require('mongoose')

function connect () {
    mongoose.connect('mongodb+srv://sathishkumar:sathish123@sms.7ikuv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
}

module.exports = connect