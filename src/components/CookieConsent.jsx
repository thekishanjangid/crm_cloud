import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show popup after a small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-md bg-[#111827] border border-gray-800 rounded-xl shadow-2xl z-50 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="bg-gray-800 p-2 rounded-lg shrink-0">
              <Cookie className="text-[#D946EF]" size={24} />
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">We use cookies</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleAccept}
                  className="bg-[#D946EF] hover:bg-[#be36d1] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex-1 md:flex-none"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="border border-gray-700 hover:bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex-1 md:flex-none"
                >
                  Decline
                </button>
              </div>
            </div>
            <button 
              onClick={handleDecline}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
