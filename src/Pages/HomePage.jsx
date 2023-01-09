import React from 'react'
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import About from "../Components/About";
import Contact from "../Components/Contact";

const HomePage = () => {
  return (
    <div>
        <Hero />
        <About />
        <Services />
        <Contact />
    </div>
  )
}

export default HomePage