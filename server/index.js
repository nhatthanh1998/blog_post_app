import express from 'express'
import cookieSession from 'cookie-session'
import passport from 'passport'
import key from './config/keys'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import { DataSchema } from './schema/DataSchema'
import cors from 'cors'


const app = express()
app.use(cors())
require('./database/mongoose')
require('./services/passport')
app.use(cookieSession({
    maxAge: 1000 * 60 * 60 * 24 * 30,
    keys: [key.COOKIE_KEY]
}))
app.use(passport.initialize())
app.use(passport.session())
require('./routes/authRoute')(app)


app.use('/graphql', bodyParser.json(), graphqlExpress(req => {
    return {
        schema: DataSchema,
        context:{
            user: req.user
        }
    }
}))

app.use(graphiqlExpress({
    endpointURL: '/graphql'
}))




const PORT = 5000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`)
})