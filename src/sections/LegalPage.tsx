import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, FileText, ChevronLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacidade' | 'termos';
}

export const LegalPage = ({ type }: LegalPageProps) => {
  const isPrivacy = type === 'privacidade';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="pt-32 pb-24 bg-base min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-12 font-bold uppercase tracking-widest text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar para o Início
          </a>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              {isPrivacy ? <Shield className="w-8 h-8" /> : <FileText className="w-8 h-8" />}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display text-ink leading-tight">
                {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso'}
              </h1>
              <p className="text-ink/60 uppercase tracking-[0.2em] text-sm font-bold mt-2">
                Última atualização: 20 de Março, 2026
              </p>
            </div>
          </div>

          <div className="prose prose-lg prose-primary max-w-none text-ink/80 leading-relaxed space-y-8 font-light">
            {isPrivacy ? (
              <>
                <section>
                  <h2 className="text-2xl font-display text-ink mb-4 font-bold uppercase tracking-wider">1. Coleta de Informações</h2>
                  <p>
                    Valorizamos sua privacidade e coletamos apenas as informações necessárias para fornecer nossos serviços. 
                    Isso pode incluir dados fornecidos voluntariamente através de formulários de contato ou durante o processo de pedido.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-display text-ink mb-4 font-bold uppercase tracking-wider">2. Uso de Dados</h2>
                  <p>
                    Seus dados são utilizados exclusivamente para processar pedidos, melhorar sua experiência em nosso site 
                    e, caso autorizado, enviar comunicações sobre promoções e novidades da Dois90.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-display text-ink mb-4 font-bold uppercase tracking-wider">3. Proteção e Segurança</h2>
                  <p>
                    Implementamos medidas técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, 
                    alteração, divulgação ou destruição acidental.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-display text-ink mb-4 font-bold uppercase tracking-wider">4. Cookies</h2>
                  <p>
                    Utilizamos cookies para entender como você utiliza nosso site e para personalizar sua experiência. 
                    Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-display text-ink mb-4 font-bold uppercase tracking-wider">1. Aceitação dos Termos</h2>
                  <p>
                    Ao acessar e utilizar o site da Dois90, você concorda com estes termos de uso e com todas as leis e regulamentos aplicáveis.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-display text-ink mb-4 font-bold uppercase tracking-wider">2. Propriedade Intelectual</h2>
                  <p>
                    Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos e design, é de propriedade exclusiva da Dois90 
                    ou de seus licenciadores e está protegido por leis de direitos autorais.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-display text-ink mb-4 font-bold uppercase tracking-wider">3. Responsabilidades</h2>
                  <p>
                    A Dois90 se esforça para manter as informações do site precisas e atualizadas, mas não garante a ausência total 
                    de erros ou omissões. O uso do site é de sua inteira responsabilidade.
                  </p>
                </section>
                <section>
                  <h2 className="text-2xl font-display text-ink mb-4 font-bold uppercase tracking-wider">4. Alterações nos Termos</h2>
                  <p>
                    Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio. Recomendamos a revisão 
                    periódica desta página.
                  </p>
                </section>
              </>
            )}

            <div className="pt-12 border-t border-ink/10 mt-16">
              <p className="text-sm text-ink/40">
                Se você tiver dúvidas sobre nossos termos ou políticas, entre em contato através do e-mail: contato@dois90.com.br
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
