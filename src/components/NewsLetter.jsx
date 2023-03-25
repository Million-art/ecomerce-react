import React from 'react'
import {Send} from '@mui/icons-material'
import styled from 'styled-components'
export const NewsLetter = () => {
    const Container =styled.div`
    width: 100%;
    height: 300px;
     display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
     gap: 20px;
     h1{
        color:rgb(55, 93, 219);
        text-decoration:underline;

      }
    `
    const InputContiner =styled.div`
    display: flex;
    gap: 20px;
    input{
        width: 500px;

    }
    button{
        background-color:rgb(55, 93, 219);
        border-radius:8px;
        color: white;
        padding:5px;
    }
    `
    const Discription =styled.div`
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:20px;
    `
  return (
            <Container>
                <Discription>
                <h1>News Letter</h1>
                <h4>Get Timely Updates From Your Favorite Product</h4>
                </Discription>
                <InputContiner>
                        <input  placeholder='Please Enter Your Email Here....'/>
                        <button>
                            <Send />
                        </button>
                </InputContiner>
            </Container>
   )
}
