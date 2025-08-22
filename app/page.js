import React from 'react'
import ClientListSection from '@/components/ClientListSection'
import HeroSection from '@/components/HeroSection'
import ExperiencesSection from '@/components/Experience'
//import ContactSection from '@/components/Contact'
import ProjectsSection from '@/components/Projects'
import AboutSection from '@/components/AboutSection'
import Navbar from '@/components/Navbar'

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
