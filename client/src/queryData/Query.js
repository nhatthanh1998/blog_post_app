import gql from 'graphql-tag'

export const CURRENT_USER = gql`
{
    current_User {
      _id
      facebookId
      googleId
    }
  }
`

export const CURRENT_BLOG = gql`
    query current_blog($_id : String){
        current_Blog(_id:$_id){
            _id
            title
            createdAt
            updatedAt
            content
        }
    }
`

export const ALL_BLOG = gql`
query all_blogs{
    allBlog{
      _id
      title
      content
      createdAt
      updatedAt
    }
  }
`
