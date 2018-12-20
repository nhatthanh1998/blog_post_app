import {Route,Router,Switch} from 'react-router-dom'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import Landing from '../container/Landing'
import DashBoard from '../container/DashBoard'
import NewBlog from '../container/NewBlog'
export const history = createHistory()

export default class ReactRoute extends React.Component{
    render(){
        return(
            <Router history = {history}>
                <Switch>
                    <Route exact path = "/" component = {Landing}/>
                    <Route path = "/dashboard" component={DashBoard}/>
                    <Route path = "/newblog" component = {NewBlog}/>
                </Switch>
            </Router>
        )
    }
}