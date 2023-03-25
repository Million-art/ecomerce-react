import { Facebook,  Instagram,   Mail,   PhoneAndroid, Place, Telegram, Twitter } from '@mui/icons-material'
import React from 'react'
import Styled  from 'styled-components'

export const Footer = () => {
    const Container =Styled.div`
     
        width:100%;
        height:250px;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
 
    `
    const InnerContainer=Styled.div`
        margin:20px;
        width:98%;
        height:250px;
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        background-color:rgb(15,15,10);
        color: white;
        border-radius:10px;
    `
    const Left =Styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    gap: 20px;
    padding-left: 30px;
     justify-content: center;
        h3{
            color:rgb(55, 93, 219);
        }
        h6{
            cursor:pointer;
            &: hover{
                color:rgb(55, 93, 219);
                transform: translate(2px);
            transition:0.5s ease-in;
            }
        }
    `
  
    const Center =Styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    gap: 20px;
    padding-left: 30px;
    padding-top: 36px; 
    justify-content: center;
            h3{
                color:rgb(55, 93, 219);
            }

            h6{
                cursor:pointer;
                display: flex;
                align-items: center;
                gap: 20px;
                &: hover{
                    color:rgb(55, 93, 219);
                    transform: translate(2px);
                transition:0.5s ease-in;
                }
        
    `
    const Right =Styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    gap: 20px;
      
    align-items: center;
    justify-content: center;
    color:rgb(55, 93, 219)
        
    `
    const Icon=Styled.div`
    display: flex;
    flex-direction:row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    `
     
  return (
    <Container>
        <InnerContainer> 
            <Left>
                <h3>Use-Full-Links</h3> 
                <h6>Home</h6>
                <h6>Products</h6>
                <h6>Catagories</h6>

            </Left>
            <Center>
                <h3>Send-Feedback</h3>
                <h6><Place /> addis abeba merkato </h6>
                <h6> <PhoneAndroid />+251 943-78-91-01 </h6>
                <h6><Mail />millionmulugeta01@gmail.com</h6>
                 
            </Center>
            <Right>
                <h3> FOLLOW-US</h3>
                <Icon>
                    <Facebook />
                    <Telegram />
                    <Twitter />
                    <Instagram />
                </Icon>
            </Right>
        </InnerContainer>
        <small>developed by Million Mulugeta 2023</small>
    </Container>
  )
}
