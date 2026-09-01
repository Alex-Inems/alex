import React from 'react'
import dynamic from 'next/dynamic'

import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/Projects'
import HeroSection from '@/components/HeroSection'
import ValuePropSection from '@/components/ValuePropSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import FaqSection from '@/components/FaqSection'
import Footer from '@/components/Footer'

const ProcessSection = dynamic(() => import('@/components/ProcessSection'))
const AiPlayground = dynamic(() => import('@/components/AiPlayground'))
const ClientListSection = dynamic(() => import('@/components/ClientListSection'))

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
