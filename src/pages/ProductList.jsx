 import React from 'react'
import styled from 'styled-components'
import { Product } from '../components/Product'
export const ProductList = () => {
 const Container=styled.div`
 
 `

 const FilterContainer=styled.div`
 display: flex;
 justify-content: space-between;
 margin:0px 40px;
 `

 

 const Filter=styled.div`
 display: flex;
 flex-direction: row;
 gap: 10px;
 `
 const FilterText=styled.div`
 font-weight:600;
 font-size:20px;
 `
  
  return (
    <Container>
             
             <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                        <select> 
                            <option disabled selected>color </option>
                            <option >white </option>
                            <option >black </option>
                            <option >red </option>
                            <option >blue </option>
                        </select>
                         
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products:
                    </FilterText>
                        <select> 
                            <option disabled selected>size </option>
                            <option >Newest </option>
                            <option >Price(highest) </option>
                            <option >Price(Chipest) </option>
                             
                        </select>
                </Filter>
             </FilterContainer>
             <Product />
             
    </Container>
  )
}
