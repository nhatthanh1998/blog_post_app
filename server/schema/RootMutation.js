import {createBlog,updateBlog,deleteBlog} from './mutations/BlogMutation'
import {GraphQLObjectType} from 'graphql'

const mutation = new GraphQLObjectType({
    name:'mutation',
    fields:{
        createBlog,
        updateBlog,
        deleteBlog
    }
})
module.exports = {
    mutation
}