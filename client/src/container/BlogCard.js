import React from 'react'
import {ALL_BLOG} from '../queryData/Query'
import {DELETE_BLOG} from '../queryData/Mutation'
import moment from 'moment'
import {Query,Mutation} from 'react-apollo'
export default class BlogCard extends React.Component{
    
    render(){
        return (
            <div className = "container" style={{maxWidth:"150rem"}}>
                <div className="row">
                <Query query={ALL_BLOG}>
                {
                    ({error,loading,data})=>{
                        if(error){
                            console.log(error)
                            return <div>Error</div>
                        }
                        if(loading){
                            return <div>Loading</div>
                        }
                        
                        return data.allBlog.map(blog=>{
                            return (

                                <div class="card" style={{ fontSize: "1.5rem", color: "black", fontFamily: "'Lato', sans-serif", width: "150rem" }}>
                                    <div class="card-header" style={{ fontSize: "2.5rem", backgroundColor: "#1e88e5", color: "white" }}>{blog.title}</div>
                                    <div class="card-body">
                                        <p class="card-text" style={{ fontSize: "2rem" }}>{blog.content}</p>
                                    </div>
                                    <div class="card-footer" style={{ backgroundColor: "#9575cd", fontSize: "2rem", color: "white" }}>Posted at: {moment(blog.createdAt).format('MMM,D YYYY  - H:mm')}
                                    <Mutation mutation ={DELETE_BLOG} update = {(cache,{data})=>{
                                        const blogs = cache.readQuery({
                                            query:ALL_BLOG
                                        })
                                        console.log(data)
                                        console.log(blog.allBlog)
                                        const deletedBlog = data.deleteBlog
                                        const list = blogs.allBlog.filter(blog=> blog._id !== deletedBlog._id)
                                        blogs.allBlog = list
                                        cache.writeQuery({
                                            query:ALL_BLOG,
                                            data:blogs
                                        })
                                    }}>
                                    {deleteBlog=>(
                                        <a href="#" onClick = {e=>{
                                            e.preventDefault()
                                            deleteBlog({variables:{_id:blog._id}})
                                        }}><span style={{float:"right",color:"#d32f2f"}}><i class="fas fa-trash-alt"></i></span></a>
                                    )}
                                    </Mutation></div>
                                </div>
                            )
                        })
                    }
                }
                </Query>
                </div>
            </div>
        )
    }
}