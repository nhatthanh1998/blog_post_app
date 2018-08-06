import React from 'react'
import styled from "styled-components";
import { client } from '../components/app'
import {CURRENT_USER} from '../queryData/Query'
import { history } from '../components/routes'
import BlogCard from './BlogCard'
const PrimaryHeader = styled.span`
    font-size:5rem;
    color:white;
    font-family: 'Press Start 2P', cursive;
    margin:0 auto;
`

const Intro = styled.div`
    max-width:200rem;
    background-color: #ffffff;
    background-image: linear-gradient(315deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 74%),url('https://images2.alphacoders.com/492/thumb-1920-49262.jpg');
    height:100vh;
    background-size:cover;
    background-attachment:fixed;
    position:relative;

`


const ADDBUTTON = styled.a`
position:fixed;
right:0;
bottom:0 ;
font-size:7rem;
-webkit-clip-path: circle(50% at 50% 50%);
clip-path: circle(50% at 50% 50%);
margin:7rem;
background-color:"red"



`


export default class DashBoard extends React.Component{
    componentDidMount(){
        client.query({
            query:CURRENT_USER
        }).then(user=>{
            if(user === null){
                history.push('/')
            }
        })
    }
    render(){
        return (
                <Intro className="container">
                <div className="row" style= {{paddingTop:"7rem"}}>
                <PrimaryHeader>
                    Welcome to BLOG!
                </PrimaryHeader>
                </div>
                <div className="row" style = {{marginTop:"5rem",opacity:".8"}}>
                <BlogCard />
                </div>

                <ADDBUTTON><i class="fas fa-plus-circle" style={{color:"red"}}></i></ADDBUTTON>
                </Intro>
        )
    }
}