import { Blog } from '../../models/blog'
import { GraphQLString } from 'graphql';
import 'babel-polyfill'
import {BlogType} from '../DataType'
const createBlog = {
    type:BlogType,
    args:{
        title:{
            type:GraphQLString
        },
        content:{
            type:GraphQLString
        }
    },
    async resolve(_,args,context){
        if(context){
            const newBlog = await new Blog({
                title:args.title,
                content:args.content,
                createdAt: new Date().getTime(),
                author:context.user
            }).save()

            context.user.blogs.push(newBlog)
            await context.user.save()
            return newBlog
        }
    }
}

const deleteBlog = {
    type:BlogType,
    args:{
        _id:{
            type:GraphQLString
        }
    },
    async resolve(_,args,context){
        if(context){
            const deletedBlog = await Blog.findById(args._id).then(blog=> blog)
            deletedBlog.remove()
            return deletedBlog
        }
    }
}

const updateBlog = {
    type:BlogType,
    args:{
        _id:{
            type:GraphQLString
        },
        title:{
            type:GraphQLString
        },
        content:{
            type:GraphQLString
        }
    },
    async resolve(_,args,context){
        if(context){
                await Blog.findById(context._id).then(blog=>{
                args.title ? blog.title = args.title : blog.title,
                args.content ? blog.content = args.content : blog.content
                blog.save().then(updatedBlog=>updatedBlog)
            })
        }
    }
}

module.exports = {
    createBlog,
    deleteBlog,
    updateBlog
}