import { Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-ink text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="Dois90" className="h-12 w-auto" />
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Uma experiência gastronômica completa. Da pizza artesanal ao café especial, celebramos os bons momentos da vida com sabor e qualidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Links Rápidos</h4>
            <ul className="flex flex-col gap-4 text-white/60">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#categorias" className="hover:text-white transition-colors">Cardápio</a></li>
              <li><a href="#unidades" className="hover:text-white transition-colors">Unidades</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/dois90_oficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-ink transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-ink transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 Dois90 Experiência Gastronômica. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#privacidade" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#termos" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
