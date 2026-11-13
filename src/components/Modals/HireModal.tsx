import React, { useState } from 'react';
import { X, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, reachChannel?: string) => void;
}

type ProjectType = 'Mobile app' | 'Web app' | 'AI system' | 'Other';
type ReachMethod = 'WhatsApp' | 'Email' | 'Phone call';

interface ProjectOption {
  type: ProjectType;
  title: string;
  subtitle: string;
}

const projectOptions: ProjectOption[] = [
  { type: 'Mobile app', title: 'Mobile app', subtitle: 'iOS or Android app' },
  { type: 'Web app', title: 'Web app', subtitle: 'Website or web platform' },
  { type: 'AI system', title: 'AI system', subtitle: 'Chatbot, automation, AI tool' },
  { type: 'Other', title: 'Other', subtitle: 'Something different' },
];

export const HireModal: React.FC<HireModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [projectType, setProjectType] = useState<ProjectType>('Web app');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sameNumberOnWhatsApp, setSameNumberOnWhatsApp] = useState(true);
  const [reachMethod, setReachMethod] = useState<ReachMethod>('WhatsApp');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    if (!email.trim() && !phone.trim()) {
      setErrorMsg('Please provide either an email or phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(name, reachMethod);
      onClose();

      // If WhatsApp preferred, also optionally open direct conversation
      if (reachMethod === 'WhatsApp') {
        const text = encodeURIComponent(
          `Hi Jethro, my name is ${name}. I would like to discuss a project:\n` +
          `• Project Type: ${projectType}\n` +
          (phone ? `• Phone: ${phone}\n` : '') +
          (email ? `• Email: ${email}\n` : '') +
          (description ? `• Details: ${description}` : '')
        );
        window.open(`https://wa.me/2349124294337?text=${text}`, '_blank');
      }

      // Reset fields
      setName('');
      setEmail('');
      setPhone('');
      setDescription('');
    }, 700);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          {/* Dimmed backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl my-auto max-h-[92vh] overflow-y-auto border border-gray-100"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 sm:pb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                Tell me about your project
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 sm:p-2 -mr-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
              
              {/* LEFT COLUMN: Project Type & Description */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-500 font-normal mb-2">
                    What should I build?
                  </label>

                  {/* Radio Group inside light grey box */}
                  <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden divide-y divide-gray-200/70 border border-gray-100">
                    {projectOptions.map((opt) => {
                      const isSelected = projectType === opt.type;
                      return (
                        <div
                          key={opt.type}
                          onClick={() => setProjectType(opt.type)}
                          className="flex items-center gap-3.5 px-4 py-3 sm:py-3.5 hover:bg-gray-200/50 cursor-pointer transition-colors select-none"
                        >
                          {/* Circular Radio Indicator */}
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                              isSelected
                                ? 'border-2 border-[#70160D] bg-white'
                                : 'border-2 border-gray-400 bg-transparent'
                            }`}
                          >
                            {isSelected && (
                              <div className="w-2 h-2 rounded-full bg-[#70160D]" />
                            )}
                          </div>

                          <div className="flex flex-col">
                            <span className="text-sm sm:text-base font-bold text-[#111827] leading-tight">
                              {opt.title}
                            </span>
                            <span className="text-xs text-gray-500 leading-tight mt-0.5">
                              {opt.subtitle}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Textarea: Describe the project */}
                <div className="bg-[#F3F4F6] rounded-2xl p-4 border border-gray-100 flex flex-col justify-between min-h-[160px] sm:min-h-[180px]">
                  <textarea
                    rows={4}
                    maxLength={2000}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the project"
                    className="w-full bg-transparent resize-none text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none flex-1 leading-relaxed"
                  />
                  <div className="text-right text-xs text-gray-400 pt-2 select-none">
                    {description.length}/2000
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Contact Details & Submit */}
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="flex flex-col gap-3">
                  {/* Your name */}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-[#F3F4F6] rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-gray-800 placeholder-gray-400 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-[#F3F4F6] rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-gray-800 placeholder-gray-400 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone, e.g. +234 801 234 5678"
                    className="w-full bg-[#F3F4F6] rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-gray-800 placeholder-gray-400 border border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all"
                  />

                  {/* Same number on WhatsApp checkbox */}
                  <div
                    onClick={() => setSameNumberOnWhatsApp(!sameNumberOnWhatsApp)}
                    className="flex items-center gap-2.5 pt-1 cursor-pointer select-none"
                  >
                    <div
                      className={`w-4 h-4 rounded-[4px] flex items-center justify-center transition-colors ${
                        sameNumberOnWhatsApp
                          ? 'bg-[#111827] text-white'
                          : 'border border-gray-400 bg-white'
                      }`}
                    >
                      {sameNumberOnWhatsApp && (
                        <Check className="w-3 h-3 stroke-[3]" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">
                      Same number on WhatsApp
                    </span>
                  </div>

                  {/* How should I reach you? */}
                  <div className="pt-2">
                    <label className="block text-xs sm:text-sm text-gray-500 font-normal mb-2">
                      How should I reach you?
                    </label>
                    <div className="flex flex-wrap items-center gap-2">
                      {(['WhatsApp', 'Email', 'Phone call'] as ReachMethod[]).map((method) => {
                        const isSelected = reachMethod === method;
                        return (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setReachMethod(method)}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#FBEAE9] text-[#70160D] font-medium border border-transparent'
                                : 'bg-[#F3F4F6] text-gray-700 font-normal hover:bg-gray-200/70 border border-transparent'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#70160D] stroke-[2.5]" />}
                            <span>{method}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Error Notification */}
                  {errorMsg && (
                    <div className="text-xs text-red-600 font-medium pt-1">
                      {errorMsg}
                    </div>
                  )}
                </div>

                {/* Send request Button */}
                <div className="pt-4 sm:pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white bg-[#70160D] hover:bg-[#59120A] active:scale-[0.99] shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-center text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending request...</span>
                      </>
                    ) : (
                      <span>Send request</span>
                    )}
                  </button>
                </div>

              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

