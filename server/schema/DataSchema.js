import {GraphQLSchema} from 'graphql'
import {mutation} from './RootMutation'
import {rootQuery} from './RootQuery'

const DataSchema = new GraphQLSchema({
    query:rootQuery,
    mutation
})

module.exports = {
    DataSchema
}