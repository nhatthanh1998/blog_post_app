import styled from 'styled-components'
import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
    const Intro = styled.div`
    max-width:200rem;
    background-color: #ffffff;
    background-image: linear-gradient(315deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 74%),url('https://images2.alphacoders.com/492/thumb-1920-49262.jpg');
    height:100vh;
    background-size:cover;
    background-attachment:fixed;
    position:relative;
`

const TextBox = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-70%);
    text-align:center;
    font-family: 'Lato', sans-serif;
`
const FaceBook = styled.div`
    font-size:3rem;
    background:red;
    margin-top:3rem;
    margin-bottom:3rem;
    border-radius:10rem;
    background-color: #4d5dfb;
    background-image: linear-gradient(315deg, #4d5dfb 0%, #08c8f6 74%);
    color:white;
    padding:.5rem;
`

const Google = styled.div`
    font-size:3rem;
    background:red;
    margin-top:3rem;
    margin-bottom:3rem;
    border-radius:10rem;
    background-color:#ee9617;
    background-image:linear-gradient(315deg, #ee9617 0%, #fe5858 74%);
    color:white;
    padding:.5rem;
`

const PrimaryHeader = styled.span`
    font-size:5rem;
    letter-spacing:1rem;
    display:block;
    background-color: #63a4ff;
    background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    color: transparent;
`
const URL = styled.a`
    &:hover,&:visited{
        text-decoration:none;
    }
`
const SecondaryHeader = styled.span`
    font-size:2.5rem;
    display:block;
    background-color: #63a4ff;
    background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
`


export default class Landing extends React.Component {
    render() {
        return (
            <Intro className="container">
                <TextBox>
                    <PrimaryHeader>
                        BLOG POST APP
                        </PrimaryHeader>
                    <SecondaryHeader>
                        Record all your blog for the future
                        </SecondaryHeader>
                    <URL href="/auth/facebook">
                        <FaceBook>
                            Login with facebook <i class="fab fa-facebook-f" style={{ marginLeft: "2rem" }}></i>
                        </FaceBook>
                    </URL>
                    <URL href="auth/google">
                        <Google>
                            Login with google <i class="fab fa-google-plus-g" style={{ marginLeft: "2rem" }}></i>
                        </Google>
                    </URL>
                </TextBox>
            </Intro>

        )
    }
}