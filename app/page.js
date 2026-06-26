import React from 'react'

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ValuePropSection from '@/components/ValuePropSection'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import AiPlayground from '@/components/AiPlayground'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/Projects'
import ClientListSection from '@/components/ClientListSection'
import FaqSection from '@/components/FaqSection'
import Footer from '@/components/Footer'

function page() {
  return (
    <div>
      <Navbar />
      <ProjectsSection />
      <HeroSection />
      <ValuePropSection />
      <ServicesSection />
      <ProcessSection />
      <AiPlayground />
      <AboutSection />
      <ClientListSection />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default page
