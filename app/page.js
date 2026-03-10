import React from 'react'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/Projects'
import ClientListSection from '@/components/ClientListSection'
import ExperiencesSection from '@/components/Experience'
import Footer from '@/components/Footer'

function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ClientListSection />
      <ExperiencesSection />
      <Footer />
    </div>
  )
}

export default page
