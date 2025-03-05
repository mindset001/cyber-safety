import React from 'react'
import Hero from '../components/landingPage/Hero'
import Services from '../components/landingPage/Services'
import About from '../components/landingPage/About'
import Footer from '../components/Footer'
import ContactForm from '../components/landingPage/ContactForm'

function Landing() {
  return (
    <main>
        <Hero/>
        <Services/>
        <About/>
        <ContactForm/>
        <Footer/>
      
    </main>
  )
}

export default Landing