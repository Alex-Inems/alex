import React from 'react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Lead development of enterprise web applications using React, Node.js, and cloud technologies. Managed a team of 4 developers and improved application performance by 40%.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB']
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2020 - 2022',
    description: 'Developed responsive web applications for various clients. Collaborated with designers and backend developers to deliver high-quality user experiences.',
    technologies: ['React', 'JavaScript', 'CSS3', 'SASS', 'REST APIs']
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Ventures',
    period: '2019 - 2020',
    description: 'Built and maintained company websites and web applications. Gained experience in full-stack development and agile methodologies.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
  }
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Experience</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Here’s a summary of my professional journey and the technologies I’ve worked with.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-red-900">{experience.title}</h3>
                  <p className="text-lg font-medium text-gray-800">{experience.company}</p>
                </div>
                <span className="text-sm px-3 py-1 rounded-full mt-2 md:mt-0 bg-gray-200 text-gray-800">
                  {experience.period}
                </span>
              </div>
              <p className="mb-4 text-gray-700 leading-relaxed">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
