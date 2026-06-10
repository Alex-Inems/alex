'use client'
import React, { useState, useEffect, useRef } from 'react';

const FaqSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "Why should I work with you instead of a traditional agency?",
      answer: "When you work with me, you bypass middle management, sales reps, and corporate overhead. You deal directly with a senior full-stack developer and n8n automation expert. This direct pipeline guarantees transparent communication, rapid iteration speeds, and custom, premium-grade code built to your exact specifications."
    },
    {
      question: "Do you build custom AI automation and Python agent pipelines?",
      answer: "Yes, absolutely! As an automation expert specializing in n8n, I design and implement production-grade workflows that connect webhooks, LLM classifiers, Google Sheets, Gmail, Slack, and CRM tools. I also build autonomous LLM agents (using CrewAI and LangChain), Python data scrapers, and API integrations — embedding AI directly into your Next.js app or running them as background automations that save your business hundreds of hours."
    },
    {
      question: "Do you build n8n workflows and webhook integrations?",
      answer: "Yes — n8n is one of my core specializations. I build end-to-end automations with n8n cloud or self-hosted instances, wired to Next.js webhook endpoints, OpenAI/GPT nodes, Google Sheets logging, Gmail notifications, and custom admin dashboards. Recent builds include an AI leads classifier and a LinkedIn post generator — both with instant frontend responses and background task processing."
    },
    {
      question: "What is your typical project timeline?",
      answer: "A standard high-converting landing page or corporate website takes between 2 to 3 weeks. Complex SaaS applications, database integrations, or full custom e-commerce stores typically take 4 to 6 weeks. I outline clear, secure milestones on Upwork so you always know exactly what is being delivered."
    },
    {
      question: "What technologies do you use for building products?",
      answer: "I specialize in React and Next.js (App Router) for blazingly fast, SEO-optimized frontends. For backends, database, and automation pipelines, I implement secure Node.js APIs, n8n workflow orchestration, robust Python services, MongoDB, PostgreSQL, and serverless tools like Supabase and Firebase."
    },
    {
      question: "Do you manage payments and contracts securely?",
      answer: "Yes, all contracts, milestone tracking, and payments are managed securely through Upwork. This offers absolute transparency, secure escrow protection for your funds, and a completely stress-free legal and financial framework for both parties."
    },
    {
      question: "Do you offer support after launching the website?",
      answer: "Absolutely. I set up comprehensive performance tracking, search console integrations, and Google Analytics pre-launch. Post-launch, I provide a dedicated support window to fix any bugs, observe user behaviors, and fine-tune loading speeds to maximize your conversions."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative bg-white py-20 md:py-32 overflow-hidden border-t border-gray-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: FAQ Header, Text, & Upwork Pill Button */}
          <div
            className={`lg:col-span-5 text-left transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Common Questions
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-10">
              Have some questions in mind? Here are answers to the most common questions clients ask me. Can't find what you are looking for? Reach out directly to book a strategy call on Upwork.
            </p>

            <div>
              <a
                href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white border border-gray-200 shadow-xl hover:shadow-2xl rounded-full transform hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              >
                {/* Upwork custom logo emblem */}
                <span className="w-6 h-6 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[10px] font-black tracking-tighter leading-none pb-[2px] pr-[1px] select-none">
                  up
                </span>
                <span className="text-sm font-semibold text-gray-800 tracking-wide font-sans">
                  Book a Call on Upwork
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Collapsible Accordions */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="divide-y divide-gray-150">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div
                    key={index}
                    className="py-6 first:pt-0 last:pb-0"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex justify-between items-center text-left group focus:outline-none py-2"
                    >
                      <span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-black transition-colors duration-200 tracking-tight pr-4">
                        {faq.question}
                      </span>
                      
                      {/* Interactive plus/minus rotating toggle icon */}
                      <span className="relative flex items-center justify-center w-6 h-6 flex-shrink-0">
                        <span className={`absolute w-4 h-[1.5px] bg-gray-900 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        <span className={`absolute w-[1.5px] h-4 bg-gray-900 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : ''}`} />
                      </span>
                    </button>
                    
                    {/* Collapsible panel with height expansion transition */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
