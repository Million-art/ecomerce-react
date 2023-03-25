import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
  export const NavBar = () => {
     const Container=styled.div`
     width:100%;
     background-color:black;
     color:white;
     height:60px;
      `
     const Wraper=styled.div`
        padding: 10px 20px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
       `
     const Left=styled.div`
      flex:1;
      display:flex;
      align-items:center;
      `
     const Languge=styled.div`
      font-size:14px;
      cursor:pointer;     `
     const Center=styled.div`
      flex:1;
      text-align:center;
     `
     const SerchContainer=styled.div`
     border:none;
     display:flex;
     align-items:center;
     margin-left:25px;
     padding:5px; 
     `
     
     const Right=styled.div`
      flex :1;
      display:flex;
      flex-direction:row;
      justify-content:flex-end;
      margin-left:10px
     `
const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
margin-right:15px;

`

     return (
    <Container>
          <Wraper>
            <Left>
                <Languge> EN</Languge>
                <SerchContainer>
                    <input type='text' placeholder='search....'/>
                    <SearchIcon /> 
                 </SerchContainer>
            </Left>

            <Center>
                 <h4>MILLION SHOPE</h4>
            </Center>

            <Right>
                 <MenuItem>Register</MenuItem> 
                 <MenuItem>Sign In</MenuItem> 
                 <Badge badgeContent={4} color="primary"> 
                 <ShoppingCartIcon/>
                 </Badge>

            </Right>
          </Wraper>
     </Container>

  )
}
