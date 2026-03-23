import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X } from 'lucide-react';
import { siteConfig } from '../config';

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const whatsappNumber = siteConfig.contact.whatsapp.aeroportoFull;

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!message.trim()) return;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl overflow-hidden shadow-2xl border border-ink/5 mb-4"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-6 text-white text-left">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white/20">
                    <img
                      src="/mila.png"
                      alt="Mila - Assistente Virtual"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Mila</h4>
                  <p className="text-xs text-white/80 text-left">Assistente Virtual Dois90</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="ml-auto hover:bg-black/10 p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-left" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="h-64 p-6 bg-[#E5DDD5] relative overflow-hidden flex flex-col justify-end gap-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-left"
              >
                <p className="text-sm text-ink font-medium mb-1 text-left">Mila:</p>
                <p className="text-sm text-ink text-left">
                  Olá! 👋 Eu sou a Mila. Como posso ajudar você hoje? <br />
                  Peça sua pizza, reserve uma mesa ou tire suas dúvidas!
                </p>
                <span className="text-[10px] text-ink/40 mt-1 block text-right">
                  {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}
                </span>
              </motion.div>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full w-fit flex gap-1 items-center"
                >
                  <span className="w-1.5 h-1.5 bg-ink/30 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-ink/30 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-ink/30 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white">
              <form onSubmit={handleSend} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-base border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#25D366] transition-all"
                />
                <button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#128C7E] transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:scale-100"
                >
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute right-full bottom-[65%] mr-[-20px] cursor-pointer z-10"
              onClick={() => setIsOpen(true)}
            >
              <img
                src="/caixa-de-texto.png"
                alt="Mensagem da Milla"
                className="w-[155px] max-w-[70vw] drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 active:scale-95"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'w-16 h-16 bg-ink text-white rotate-90 shadow-2xl mr-4' : 'w-32 h-32 bg-transparent'
            }`}
        >
          {isOpen ? <X className="w-8 h-8" /> : (
            <div className="relative w-full h-full">
              <img
                src="/mila.png"
                alt="Mila"
                className="w-full h-full object-cover drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
              />
              <span className="absolute top-4 right-4 w-5 h-5 bg-red-500 border-2 border-white rounded-full animate-pulse shadow-lg"></span>
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
};
