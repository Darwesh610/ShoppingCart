import React from 'react'
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import Product from '../Product/Product'

export default function Home({products}) {
  return <>
    <Header/>
    <Filter/>
    <Product products={products}/>
  </>
}
