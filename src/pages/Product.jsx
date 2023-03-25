 
 import { Title } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { NewsLetter } from '../components/NewsLetter'
 
export const Products = () => {
    const Container=styled.div`
    
    `
    const Wrapper=styled.div`
    display: flex;
    flex-direction:row;
    width:100%;
    height:350px;
    background-color:white;
    `
    const Title=styled.div`
     display:flex;
    flex-direction:column;
    
      
    `
    const ImageContainer=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: center;

    img{
      width:100%;
      height:90%;
      padding:20px 50px;
    }

    `
    
    const Discription=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content: center;
     gap:10px;
    h1{
      font-weight:200;
    }
   
    ` 
  return (
    <Container>
        <Announcement />
        <NavBar />
        <Wrapper>
          
            <ImageContainer>
            
                 <img src='https://cdn1.smartprix.com/rx-iD8y25iVP-w1200-h1200/D8y25iVP.jpg' />
             </ImageContainer>
             <Discription>
                <Title>
                <h1>IPHONE 14</h1>
                </Title>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium soluta sint aperiam blanditiis iste asperiores possimus nostrum culpa magnam perferendis</p>
                <h1>$10</h1>
             </Discription>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

