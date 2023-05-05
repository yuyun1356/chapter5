import React from 'react'
import Header from '../Components/Header'
import Content from '../Components/Content'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {  
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Home