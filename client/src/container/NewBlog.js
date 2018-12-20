import React from 'react'
import { client } from '../components/app'
import {history} from '../components/routes'
import { CURRENT_USER } from '../queryData/Query'
import {Mutation} from 'react-apollo'
import {ALL_BLOG} from '../queryData/Query'
import {CREATE_BLOG} from '../queryData/Mutation'
import styled from 'styled-components'

const Background = styled.div`
width: 100%;
height:100vh;
background:url("/img/background.png");



`
export default class NewBlog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:"",
            content:""
        }
    }
    componentDidMount(){
        client.query({
            query:CURRENT_USER
        }).then(user=>{
            if(user == null){
                history.push("/")
            }
        })
    }
    render(){
        return(
            <Background>
                <div className="container">
                    <div className="row" >
                        <span style = {{color:"white",fontSize:"5rem",margin:"0 auto",paddingTop:"2rem"}}>ADD NEW POST!</span>
                    </div>
                    <div className="row">
                        <label for="title" style={{color:"#880e4f",fontSize:"2rem"}}>Title</label>
                        <input type="text" class="form-control" placeholder="Title of the blog" style={{fontSize:"2rem",height:"3rem"}} id="title" onChange={event => this.setState({
                            title:event.target.value
                        })} ></input>
                    </div>
                    <div className="row mt-3">
                        <label for="content" style={{color:"#880e4f",fontSize:"2rem"}}>Content</label>
                        <textarea rows="13" class="form-control" placeholder="Content of the blog" style={{fontSize:"2rem"}} id="content" onChange= {
                            event =>{
                                this.setState({
                                    content:event.target.value
                                })
                                console.log(this.state.content)
                            }
                        }></textarea>
                    </div>
                    <div className = "row mt-3">
                    <Mutation mutation ={CREATE_BLOG} update = {(cache,{data})=>{
                                        const blogs = cache.readQuery({
                                            query:ALL_BLOG
                                        })
                                        console.log(data)
                                        console.log(blogs.allBlog)
                                        const createBlog = data.createBlog
                                        blogs.allBlog = blogs.allBlog.push(createBlog)
                                        cache.writeQuery({
                                            query:ALL_BLOG,
                                            data:blogs
                                        })
                                    }}>
                                    {createBlog=>(
                                        <a href = "#" onClick ={async e => {e.preventDefault()
                                        await createBlog({
                                            variables:{
                                                title:this.state.title,
                                                content:this.state.content
                                            }
                                        })
                                        history.push("/dashboard")
                                        }}>

                                        <div className="btn btn-success w-100" style={{fontSize:"2rem",height:"4rem"}}>Add New!</div>
                                        </a>
                                    )}
                                    </Mutation>
                    
                    </div>
                    <div className = "row mt-2">
                    <a className="btn btn-danger w-100" style={{fontSize:"2rem",height:"4rem"}} href="/dashboard">Go Back!</a>
                    </div>
                </div>
            </Background>
        )
    }
}