import React from 'react'
import Hero from '../components/landingPage/Hero'
import Services from '../components/landingPage/Services'
import About from '../components/landingPage/About'
import Footer from '../components/Footer'
import ContactForm from '../components/landingPage/ContactForm'
import Insights from '../components/landingPage/Insights'
import Optimize from '../components/landingPage/Optimize'
import Solutions from '../components/landingPage/Solutions'
import ResultsSection from '../components/landingPage/Result'

function Landing() {
  return (
    <main className='overflow-x-hidden'>
        <Hero/>
        <Services/>
        <About/>
        <Solutions/>
        <ResultsSection />
        <Insights/>
        <Optimize/>
        <ContactForm/>
        <Footer/>
      
    </main>
  )
}

export default Landing