import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-6 right-6 md:left-8 md:right-auto md:max-w-md z-[70]"
        >
          <div className="bg-white/95 backdrop-blur-xl p-6 rounded-[2rem] border border-black/5 shadow-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-ink font-bold text-lg mb-1">Aviso de Cookies</h4>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa{' '}
                    <a href="#privacidade" className="text-primary hover:underline font-bold">política de privacidade</a>.
                  </p>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-ink/20 hover:text-ink transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-primary text-white py-3 rounded-full font-bold text-sm hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20"
                >
                  Aceitar Tudo
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="px-6 bg-ink/5 text-ink py-3 rounded-full font-bold text-sm hover:bg-ink/10 transition-all"
                >
                   Fechar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
