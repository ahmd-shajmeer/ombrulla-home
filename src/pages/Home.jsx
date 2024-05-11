import React from 'react'
import Hero from '../components/Hero'
import Achievement from '../components/Achievement'
import InspectionService from '../components/InspectionService'
import InfrastructureService from '../components/InfrastructureService'
import AIProduct from '../components/AIProduct'
import Products from '../components/Products'
import Brands from '../components/Brands'
import CustomerInfiniteScroll from '../components/CustomerInfiniteScroll'
import Testimonials from '../components/Testimonials'
import Read from '../components/Read'

function Home() {
  return (
    <>
    <div>
        <Hero/>
        <Achievement/>
        <InspectionService/>
        <InfrastructureService/>
        <AIProduct/>
        <Products/>
        <CustomerInfiniteScroll/>
        <Testimonials/>
        <Brands/>
        <Read/>
    </div>
    </>
  )
}

export default Home