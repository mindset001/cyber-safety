import React from 'react'
import Blogs from '../components/blog/AllBlog'
import Footer from '../components/Footer'
import ContactForm from '../components/landingPage/ContactForm'
import Navbar from '../Nav2/page'

function page() {
  return (  
    <div>
      <Navbar/>
      <Blogs />
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default page