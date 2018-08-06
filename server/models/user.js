import mongoose,{Schema} from 'mongoose'
const UserSchema = new Schema({
    facebookId:{
        type:String
    },
    googleId:{
        type:String
    },
    blogs:[{
        type:Schema.Types.ObjectId,
        ref:'blog'
    }]
})

const User = mongoose.model('user',UserSchema)

module.exports = {
    User
}
