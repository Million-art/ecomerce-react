import React from 'react'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import Visibility from '@mui/icons-material/Visibility';
import products from './Products'
import styled from "styled-components";
 export const Product = () => {
  
const Container=styled.div`
width:100%;
height:auto;
 display:flex;
margin-top:20px;
flex-direction:column;
justify-content:center;
align-items:center;
      h1{
        color:rgb(55, 93, 219);
        text-decoration:underline;

      }
      .products{
        margin-top:20px;
        width:100%;
        height:auto;
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        gap: 10px;
        flex-wrap: wrap;

          .product-list{
            width:25%;
            height:250px;
            position: relative;
            display:flex;
            flex-direction:column;
               
              img{
                border-radius:20px;      
                display:flex;
                flex-direction:row;
                justify-content:center;
                align-items:center;
                height:100%;
                 
                
              }
              h4{
                text-align:center;
               }
          }
    }    

`
const Icons = styled.div`
  position:absolute;
  top:50;

   
 
 
`
const Icon=styled.div`
background-color:rgb(55, 93, 219);
 border-radius:50%;
margin-top:10px;
padding:5px;
margin-left:40px;
transition:0.3s ease-in;
color:white;

`
 
  return (
    <Container> 
         <h1>  Products </h1>
          <div className="products">
              {
                products.map((product) =>
                
                    <div className='product-list'>
                      <Icons className='icons'>
                          <Icon > 
                              <ShoppingCartOutlined />
                          </Icon>
                          <Icon >
                              <FavoriteBorderOutlined />
                          </Icon>
                          <Icon> 
                              <Visibility />
                          </Icon>
                      </Icons>
                        <img src={product.img} alt='img' />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                    </div>
                )
              }
          </div> 
    </Container>
  )
}
