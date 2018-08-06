import {UserType,BlogType} from './DataType'
import {GraphQLObjectType,GraphQLList, GraphQLString} from 'graphql'
import {Blog} from '../models/blog'
import 'babel-polyfill'
const rootQuery = new GraphQLObjectType({
    name:'rootQuery',
    fields:{
        current_User:{
            type:UserType,
            resolve(_,__,context){
                if(context){
                    return context.user
                }else{
                    return null
                }
            }
        },
        current_Blog:{
            type:BlogType,
            args:{
                _id:{
                    type:GraphQLString
                }
            },
            async resolve(_,args){
                const blog = await Blog.findById(args._id).then(blog => blog)
                return blog
            }
        },
        allBlog:{
            type:new GraphQLList(BlogType),
            async resolve(_,__,context){
                if(context){
                    const blogs = await Blog.find({
                        author:context.user._id.toString()
                    }).then(blogs => blogs)
                    return blogs
                }else{
                    return null
                }
                
            }
        }
    }
})
module.exports = {
    rootQuery
}