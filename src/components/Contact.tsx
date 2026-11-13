import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Loader2, Check, Copy } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactProps {
  selectedService?: string;
  onSuccess: (name: string) => void;
  onShowToast: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSuccess, onShowToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const emailAddress = 'jethrosamson13@gmail.com';
    navigator.clipboard.writeText(emailAddress).then(() => {
      onShowToast('Email copied to clipboard!');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      onShowToast(`Email: ${emailAddress}`);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(name);
      setName('');
      setEmail('');
      setMessage('');
    }, 900);
  };

  return (
    <section id="contact" className="bg-[#E9ECF0] py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Compact Floating Rounded Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_15px_45px_-12px_rgba(0,0,0,0.06)] p-5 sm:p-7 md:p-8 lg:p-9 border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Direct Info & Channels */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#111827] tracking-tight leading-snug mb-5 sm:mb-6">
                Let's work together
              </h2>

              {/* Contact Detail Channels */}
              <div className="space-y-4">
                
                {/* E-mail Item */}
                <div
                  onClick={handleCopyEmail}
                  className="flex items-center gap-3.5 group cursor-pointer"
                  title="Click to copy email"
                >
                  <div className="w-6 h-6 text-[#076FDA] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium leading-none mb-1">E-mail</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111827] flex items-center gap-1.5">
                      <span className="group-hover:text-[#076FDA] transition-colors">jethrosamson13@gmail.com</span>
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone Number Item */}
                <a
                  href="tel:+2347077038404"
                  className="flex items-center gap-3.5 group cursor-pointer"
                  title="Call Phone Number"
                >
                  <div className="w-6 h-6 text-[#076FDA] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium leading-none mb-1">Phone number</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111827] group-hover:text-[#076FDA] transition-colors">
                      +234 707 703 8404
                    </div>
                  </div>
                </a>

                {/* WhatsApp Item */}
                <a
                  href="https://wa.me/2349124294337?text=Hi%20Jethro%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 group cursor-pointer"
                  title="Chat on WhatsApp"
                >
                  <div className="w-6 h-6 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium leading-none mb-1">WhatsApp</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111827] group-hover:text-[#25D366] transition-colors flex items-center gap-1.5">
                      <span>+234 912 429 4337</span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                        Chat &rarr;
                      </span>
                    </div>
                  </div>
                </a>

              </div>

            </div>

            {/* Right Column: Compact Elevated Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-[0_10px_30px_-8px_rgba(0,0,0,0.06)] border border-gray-100 p-4 sm:p-5 lg:p-6">
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-medium text-gray-500 mb-1">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full px-3.5 py-2 rounded-lg sm:rounded-xl bg-[#F4F5F7] text-xs sm:text-sm text-gray-900 placeholder-gray-400 border border-transparent focus:bg-white focus:border-[#076FDA] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-medium text-gray-500 mb-1">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@iframee.com"
                      className="w-full px-3.5 py-2 rounded-lg sm:rounded-xl bg-[#F4F5F7] text-xs sm:text-sm text-gray-900 placeholder-gray-400 border border-transparent focus:bg-white focus:border-[#076FDA] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-medium text-gray-500 mb-1">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full px-3.5 py-2 rounded-lg sm:rounded-xl bg-[#F4F5F7] text-xs sm:text-sm text-gray-900 placeholder-gray-400 border border-transparent focus:bg-white focus:border-[#076FDA] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Compact Submit Button ("Get a Solution") */}
                  <div className="pt-1">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2.5 p-1 pr-5 sm:pr-6 rounded-full bg-[#076FDA] text-white hover:bg-[#055ec0] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-60"
                    >
                      <div className="w-7 h-7 rounded-full bg-white text-[#076FDA] flex items-center justify-center flex-shrink-0 shadow-sm">
                        {isSubmitting ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-[#076FDA]" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide">
                        {isSubmitting ? 'Sending...' : 'Get a Solution'}
                      </span>
                    </motion.button>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};