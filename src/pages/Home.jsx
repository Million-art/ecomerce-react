import React from 'react'
import { NavBar } from '../components/NavBar'
import { Announcement } from '../components/Announcement'
import {Slider} from '../components/Slider'
import {Catagories} from '../components/Catagories.jsx'
import { Product } from '../components/Product'
import { NewsLetter } from '../components/NewsLetter'
import { Footer } from '../components/Footer'
import { ProductList } from './ProductList'
 

 export const Home = () => {
  return (
    <div>
        <Announcement/>
        <NavBar />
        <Slider />
        <Catagories />
        <Product />
        <ProductList />
        <NewsLetter />
        <Footer />
    </div>
  )
}



 