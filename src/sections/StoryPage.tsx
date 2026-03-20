import { ChevronLeft } from 'lucide-react';

export const StoryPage = () => {
  return (
    <div className="pt-32 pb-24 bg-ink min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs mb-12">
          <ChevronLeft className="w-4 h-4" /> Voltar para o início
        </a>

        <h1 className="text-5xl md:text-7xl font-display font-bold mb-12 text-white">De onde viemos.</h1>

        <div className="prose prose-lg max-w-none text-white/80 font-sans leading-relaxed mb-16 space-y-6">
          <p className="text-2xl font-display font-bold text-white mb-8 leading-snug">
            Quem sou... Eu sou de Roraima, sou do dia 12 de junho de 2000, sou de Boa Vista, sou a Pizzaria Dois90.
          </p>
          <p>
            Um nome singular para uma pizzaria, mas com certeza um nome bem contextualizado com a história de Roraima, pois 2-90 foi a placa do primeiro automóvel táxi de Boa Vista que não era um Jeep.
          </p>
          <p>
            Em 1966, o Aero Willys azul, com sua placa 2-90, tornou-se um sucesso. Muitas pessoas queriam aproveitar a novidade e dar uma volta pela cidade.
          </p>
          <p>
            Assim, também foi criado o primeiro ponto de táxi de Boa Vista, localizado na esquina onde hoje são as avenidas Getúlio Vargas e Sílvio Botelho, no centro. O ponto recebeu do então governador Hélio Campos a concessão de uma linha telefônica com o mesmo número: 2-90.
          </p>
        </div>

        {/* Car Image Header */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl mb-24 relative border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-12 flex justify-center">
          <img src="/car.png" alt="Aero Willys 2-90 - 1966" className="w-full h-auto max-h-[600px] object-contain relative z-0" />
        </div>

        {/* Missão e Valores */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Missão */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-primary/40 transition-colors flex flex-col">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">Nossa Missão</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Trabalhar em equipe para transformar a vontade de comer em uma experiência agradável, sendo diferenciado pela qualidade, atendimento, inovação e produtividade.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-white/40 transition-colors flex flex-col">
            <h3 className="text-2xl font-display font-bold mb-4 text-white">Nossa Visão</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Ser referência em oferecer produtos que busquem atender a necessidade do público em alimentação dentro e fora de casa.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-accent/40 transition-colors flex flex-col">
            <h3 className="text-2xl font-display font-bold mb-4 text-accent">Nossos Valores</h3>
            <ul className="flex flex-col gap-4 text-white/80 text-sm">
              <li>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white">Respeito:</strong> <span className="text-white/70">Valorize o que torna cada pessoa única.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white">Colaboração:</strong> <span className="text-white/70">Juntos somos mais fortes.</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="text-white">Empatia:</strong> <span className="text-white/70">Tente se colocar no lugar do outro.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
