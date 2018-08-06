import React  from 'react'
import {ApolloProvider} from 'react-apollo'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import ReactRoute from './routes'
const cache = new InMemoryCache({
    dataIdFromObject:object =>object._id
})
const link = new HttpLink({
    uri:'/graphql',
    credentials:"same-origin"
})

export const client = new ApolloClient({
    cache,
    link
})


export default class App extends React.Component{
    render(){
        return(
            <ApolloProvider client = {client}>
                <ReactRoute/>
            </ApolloProvider>
        )
    }
}