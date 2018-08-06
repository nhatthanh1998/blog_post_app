import gql from 'graphql-tag'



export const CREATE_BLOG = gql`
mutation create_blog($title:String,$content:String){
    createBlog(title:$title,context:$content){
        _id
        title
        createdAt
        content
    }
}
`
export const DELETE_BLOG = gql`
mutation delete_blog($_id:String){
    deleteBlog(_id:$_id){
        _id
    }
}
`
export const UPDATE_BLOG = gql`
mutation update_blog($title:String,$content:String){
    updateBlog(title:$title,content:$content){
        _id
        title
        content
        updatedAt
    }
}
`