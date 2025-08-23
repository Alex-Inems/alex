import React from 'react'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/Projects'
import ClientListSection from '@/components/ClientListSection'
import ExperiencesSection from '@/components/Experience'

function page() {
  return (
    <div>
     <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ClientListSection/>
      <ExperiencesSection/>
    
    
    </div>
  )
}

export default page
