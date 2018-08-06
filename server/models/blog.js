import mongoose,{Schema} from 'mongoose'
import 'babel-polyfill'
const BlogSchema = new Schema ({
    title:{
        type:String
    },
    content:{
        type:String
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    createdAt:{
        type:Number
    },
    updatedAt:{
        type:Number
    }
})

const Blog = mongoose.model('blog',BlogSchema)

BlogSchema.pre('remove',async function(next){
    const blog = this
    const UserSchema = mongoose.model('user')
    await UserSchema.findById(blog.author)
    .then(async user=>{ 
        await user.blogs.filter(blog => 
        blog._id !== this._id) 
        user.save()})
    next()
})

module.exports = {
    Blog
}