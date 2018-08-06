import {Route,Router,Switch} from 'react-router-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import Landing from '../container/Landing'
import DashBoard from '../container/DashBoard'
export const history = createHistory()

export default class ReactRoute extends React.Component{
    render(){
        return(
            <Router history = {history}>
                <Switch>
                    <Route exact path = "/" component = {Landing}/>
                    <Route exact PATH = "/dashboard" component={DashBoard}/>
                </Switch>
            </Router>
        )
    }
}