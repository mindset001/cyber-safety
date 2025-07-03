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
import Team from '../components/landingPage/Team'
import QuarterSaturdaysPage from '../components/landingPage/QuarterSaturday'

function Landing() {
  return (
    <main className='overflow-x-hidden'>
        <Hero/>
        <Services/>
        <div id='about-us'>
        <About/>
        </div>
       {/* <Team/> */}
       <div id='what-we-do'>
       <ResultsSection />
       </div>
        <Solutions/>
        {/* <div id='blog'>
        <Insights/>
        </div> */}
        {/* <Optimize/> */}
        <div id='contact-us'>
        <ContactForm/>
        </div>
        <Footer/>
      
    </main>
  )
}

export default Landing