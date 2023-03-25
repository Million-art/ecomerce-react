import React from 'react'
import styled from 'styled-components'
import {CatagoriesData} from './CatagoriesData'
 
const Container = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 margin:30px 20px;
      h1{
        color:rgb(55, 93, 219);
        text-decoration:underline;

      }
      .wrapper{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:100%;
        height:300px;
        margin-top:10px;
        gap:10px;
            .item-container{
              
              width:100%;
              height: 90%;
              position: relative;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              &:hover{
                transform: scale(1.1, 1.1);
                transition:0.5s ease-in;
              } 
                  img{
                    border-radius:20px;
                      width:100%;
                      display:flex;
                      flex-direction:column;
                      height:100%;
                      margin :10px;
                      
                       
                  }
                  .info{
                        position: absolute;
                        display:flex;
                        flex-direction:column;
                        gap: 10px;
                   
                        
                      button{
                        background-color:black;
                        border-radius:10px;
                        color:white;
                        font-size:1rem;
                        padding:10px 20px;
                        &: hover{
                          background-color:rgb(55, 93, 219);
                        }
                      }
                  }

             }
    }
`
export const Catagories = () => {
    return (
  <Container>
        <h1>catagories</h1>
        <div   className='wrapper'>
            {CatagoriesData.map((item)=>(
              <div  className='item-container' >
                <img src={item.img} alt=''/>
                <div className='info'>
                     <button>{item.title}</button>
                </div>
              </div>

          ))}
         </div>

  </Container>
      )
}
