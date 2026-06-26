import React from 'react';

const HeroSection = () => {
  const designs = [
    { title: 'Yowaa Footwear', tag: 'Shopify', img: '/images/yowaa.png' },
    { title: 'Yanga Beauty', tag: 'Shopify', img: '/images/yanga.png' },
    { title: 'Aurum & Co.', tag: 'Luxury', img: '/images/aurum.png' },
    { title: 'Inema Construction', tag: 'Shopify', img: '/images/inema.png' },
    { title: 'n8n Leads Classifier', tag: 'n8n', img: '/images/n8n lead classifier.png' },
    { title: 'LinkedIn Post Generator', tag: 'n8n + AI', img: '/images/linkedin post generator.png' },
    { title: 'Xtraspare E-commerce', tag: 'Next.js', img: '/images/bikewall.jpg' },
    { title: 'Oreo Luxury Showroom', tag: 'Shopify', img: '/images/oreo (1).png' },
    { title: 'Blogme Publishing', tag: 'React', img: '/images/blogwall.jpg' },
    { title: 'Eventie Tickets System', tag: 'Supabase', img: '/images/eventie.jpg' },
    { title: 'Creative Builders Hub', tag: 'Sass', img: '/images/creative.png' },
    { title: 'Amazon Analytics Suite', tag: 'D3.js', img: '/images/amazon.png' },
  ];

  const doubledDesigns = [...designs, ...designs];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-4 py-20 border-t border-gray-100">
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-210px * 12 - 1.5rem * 12)); }
        }
        .scroll-container {
          overflow: hidden;
          width: 100%;
          position: relative;
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
        .scroll-track {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: infinite-scroll 25s linear infinite;
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="section-container relative z-10 w-full max-w-4xl">
        <div className="text-center">
          {/* Inactive availability pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-50/80 border border-emerald-100/80 text-emerald-800 text-xs sm:text-sm font-semibold rounded-full mb-8 shadow-sm select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            5 spots left this month
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8 text-black">
            Custom Shopify stores that build <br className="hidden sm:inline" /> <span className="font-light">premium brands.</span>
          </h1>
          
          <p className="text-base sm:text-lg mb-12 max-w-2xl mx-auto text-gray-800 leading-relaxed font-light">
            I'm a Shopify developer who builds high-converting storefronts — and when you need more, <br className="hidden sm:inline" /> I deliver full-stack web apps and n8n automations that scale your business after launch.
          </p>

          {/* ✅ Responsive button */}
          <div className="flex justify-center w-full px-2 mb-20">
            <a
              href="https://www.upwork.com/freelancers/~01d99779b36e05950f?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <span className="w-6 h-6 rounded-full bg-[#14a800] flex items-center justify-center text-white text-[10px] font-black tracking-tighter leading-none pb-[2px] pr-[1px] select-none">
                up
              </span>
              <span>Book a Call on Upwork</span>
            </a>
          </div>

          {/* ✅ Seamless infinite scrolling carousel */}
          <div className="mt-6 w-full">
            <div className="scroll-container">
              <div className="scroll-track">
                {doubledDesigns.map((design, i) => (
                  <div
                    key={i}
                    className="w-[210px] h-[140px] flex-shrink-0 relative rounded-xl overflow-hidden shadow-md border border-gray-100 group cursor-pointer transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg"
                  >
                    <img
                      src={design.img}
                      alt={design.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
                    
                    {/* Tag */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-[10px] font-semibold text-white tracking-wide uppercase">
                        {design.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-3.5 left-3 right-3 text-left">
                      <h3 className="text-white text-xs font-semibold tracking-wide truncate group-hover:text-blue-200 transition-colors duration-300">
                        {design.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
