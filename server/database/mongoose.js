import mongoose from 'mongoose'
import keys from '../config/keys'
mongoose.Promise = global.Promise

mongoose.connect(keys.MONGO_URI,{ useNewUrlParser: true })

module.exports = {
    mongoose
}