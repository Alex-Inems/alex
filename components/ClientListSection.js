import React from 'react';

const clients = [
  {
    name: 'TechCorp Solutions',
    logo: '/images/bike.jpg',
    project: 'E-commerce Platform',
    description: 'Built a comprehensive e-commerce platform with real-time inventory management and payment processing.'
  },
  {
    name: 'Creative Agency Pro',
    logo: '/placeholder.svg',
    project: 'Portfolio Website',
    description: 'Designed and developed a modern portfolio website showcasing creative work with smooth animations.'
  },
  {
    name: 'FinanceFlow Inc.',
    logo: '/placeholder.svg',
    project: 'Financial Dashboard',
    description: 'Created an interactive financial dashboard with data visualization and reporting capabilities.'
  },
  {
    name: 'HealthTech Innovations',
    logo: '/placeholder.svg',
    project: 'Patient Management System',
    description: 'Developed a secure patient management system with appointment scheduling and medical records.'
  },
  {
    name: 'EduLearn Platform',
    logo: '/placeholder.svg',
    project: 'Learning Management System',
    description: 'Built an online learning platform with video streaming, quizzes, and progress tracking.'
  },
  {
    name: 'RetailMax Group',
    logo: '/placeholder.svg',
    project: 'Inventory Management',
    description: 'Implemented a real-time inventory management system with barcode scanning and analytics.'
  }
];

const ClientListSection = () => {
  return (
    <section id="clients" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Portfolio</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I've had the privilege of working with amazing clients across various industries,
            delivering custom solutions that drive their business forward.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-14 h-14 rounded-lg object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-red-900">{client.name}</h3>
                  <p className="text-sm text-gray-700">{client.project}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientListSection;
