import {GraphQLString,GraphQLObjectType,GraphQLList,GraphQLFloat} from 'graphql'

const UserType = new GraphQLObjectType({
    name:'user',
    fields:()=>({
        _id:{
            type:GraphQLString
        },
        facebookId:{
            type:GraphQLString
        },
        googleId:{
            type:GraphQLString
        },
        blogs:{
            type:new GraphQLList(BlogType)
        }
    })
})

const BlogType = new GraphQLObjectType({
    name:'blog',
    fields:()=>({
        _id:{
            type:GraphQLString
        },
        title:{
            type:GraphQLString
        },
        content:{
            type:GraphQLString
        },
        author:{
            type:UserType
        },
        createdAt:{
            type:GraphQLFloat
        },
        updatedAt:{
            type:GraphQLFloat
        }
    })
})

module.exports = {
    BlogType,UserType
}