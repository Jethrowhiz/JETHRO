import React from 'react';
import { ArrowRight, Globe, Code, Layers, Smartphone, Cpu, Palette, Wrench } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { motion } from 'framer-motion';

interface ServicesProps {
  onSelectService: (serviceType: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'web-dev': return <Globe className="w-5 h-5" />;
      case 'frontend-dev': return <Code className="w-5 h-5" />;
      case 'web-app-dev': return <Layers className="w-5 h-5" />;
      case 'mobile-app-dev': return <Smartphone className="w-5 h-5" />;
      case 'web3-dev': return <Cpu className="w-5 h-5" />;
      case 'ui-ux-impl': return <Palette className="w-5 h-5" />;
      case 'custom-software': return <Wrench className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const handleInquire = (serviceType: string) => {
    onSelectService(serviceType);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="bg-[#F9FAFB] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#8B1E13]/10 border border-[#8B1E13]/20 text-[#8B1E13] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E13]"></span>
            <span>WHAT I DO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#111827] tracking-tight mb-2.5">
            Bringing ideas to life through technology
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Specialized development services tailored to craft high-performance websites, scalable web applications, and intuitive decentralized protocols.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {servicesData.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center group-hover:bg-[#8B1E13] group-hover:text-white transition-all duration-200">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400">{service.number}</span>
                </div>

                <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#8B1E13] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 sm:min-h-[3.5rem]">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-400">
                  {service.tags.join(' • ')}
                </span>
                <button
                  type="button"
                  onClick={() => handleInquire(service.serviceType)}
                  className="text-xs sm:text-sm font-semibold text-[#8B1E13] hover:text-[#70160D] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1 cursor-pointer py-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* 7th Card: Custom Software Solutions (Spans full width on desktop) */}
          {servicesData.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="md:col-span-2 lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 md:p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6">
                <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                    {getIcon(servicesData[6].id)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#111827]">{servicesData[6].title}</h3>
                      <span className="text-xs font-mono font-bold text-gray-400">{servicesData[6].number}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
                      {servicesData[6].description}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleInquire(servicesData[6].serviceType)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#8B1E13] text-white hover:bg-[#70160D] shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center self-start sm:self-center cursor-pointer"
                >
                  <span>Discuss Custom Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};