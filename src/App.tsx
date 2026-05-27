import { motion } from "motion/react";
import { 
  Check, 
  ChevronDown, 
  Lock, 
  Layout, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  RefreshCw,
  Layers,
  CircleSlash
} from "lucide-react";
import { useState } from "react";

const FAQ_DATA = [
  { q: "O app funciona para iniciantes?", a: "Sim. O app é visual e direto ao ponto. Mesmo quem está começando consegue aplicar os acordes imediatamente." },
  { q: "Preciso de internet para usar?", a: "Após acessar o app, você pode consultar os acordes sempre que precisar, direto no celular." },
  { q: "Esse app serve para louvor e igreja?", a: "Sim. Os acordes foram pensados para louvor, worship, gospel, pop, MPB e aplicações modernas." },
  { q: "O pagamento é único mesmo?", a: "Sim. Pagamento único, acesso vitalício e atualizações futuras inclusas." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias para testar. Se não gostar, devolvemos 100% do seu dinheiro." }
];

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: string | number }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-primary/25">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors px-4 rounded-lg group"
      >
        <span className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-primary"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-6 px-4 text-gray-300 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <header className="relative min-h-[95vh] lg:min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-black">
        {/* Container da Imagem (Em cima no Mobile, Lado no Desktop) */}
        <div className="relative w-full lg:absolute lg:right-0 lg:top-0 lg:w-3/5 lg:h-full z-0 h-[40vh] md:h-[50vh] lg:h-full order-1 lg:order-2">
          <img 
            src="https://eliabcamposteclas.com/wp-content/uploads/2026/05/hero-app.jpg" 
            className="w-full h-full object-cover object-top lg:object-center opacity-100"
            alt="Dicionário de Acordes Pro"
            referrerPolicy="no-referrer"
          />
          
          {/* Overlays de Mesclagem - Mobile (Fundo para baixo) */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black lg:hidden" />
          
          {/* Overlays de Mesclagem - Desktop (Fundo para esquerda e para baixo) */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Conteúdo de Texto */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 order-2 lg:order-1 pt-0 lg:pt-8 pb-16 lg:py-0 -mt-12 md:-mt-16 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl lg:text-left text-center"
          >
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] md:leading-tight tracking-tighter mb-4 md:mb-6 bg-linear-to-b from-white to-gray-400 bg-clip-text text-transparent">
              O App que todo tecladista precisa<br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(229,57,53,0.4)]">para sair do básico e soar profissional</span>
            </h1>

            <p className="text-gray-300 text-base md:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-medium">
              Chega de tocar sempre os mesmos acordes.  
              Tenha acordes sofisticados, visualizados no teclado e prontos para aplicação imediata.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button onClick={scrollToOffer} className="cta-button scale-100 md:scale-110 w-full sm:w-auto">
                QUERO ACESSAR O APP
              </button>
            </div>
          </motion.div>
        </div>

        {/* Indicador de Scroll Desktop */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 lg:left-20 -translate-x-1/2 lg:translate-x-0 text-primary/40 hidden md:block"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </header>

      {/* PAIN SECTION (DOR) */}
      <section className="section-padding bg-linear-to-b from-black to-card-dark">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-display font-extrabold text-center mb-16"
        >
          Esse é você sem o <span className="text-primary">App Dicionário de Acordes</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
          {[
            { 
              icon: <CircleSlash className="w-8 h-8 text-primary" />, 
              title: "Acordes repetidos", 
              desc: "Sua música muda, mas o som continua o mesmo." 
            },
            { 
              icon: <Zap className="w-8 h-8 text-primary" />, 
              title: "Sem identidade", 
              desc: "Falta personalidade e sofisticação na harmonia." 
            },
            { 
              icon: <Lock className="w-8 h-8 text-primary" />, 
              title: "Trava criativa", 
              desc: "Na hora de improvisar, tudo parece limitado." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={scrollToOffer} className="cta-button">
            QUERO EVOLUIR AGORA
          </button>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="section-padding">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-5xl font-display font-extrabold mb-4"
          >
            O que muda quando você tem um<br />
            <span className="text-primary">APP de acordes sofisticados?</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">Você consulta, aplica e evolui — tudo no mesmo lugar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            { img: "https://eliabcamposteclas.com/wp-content/uploads/2026/05/app-tela-1-1.jpg", title: "Visual no teclado", desc: "Veja exatamente quais notas tocar." },
            { img: "https://eliabcamposteclas.com/wp-content/uploads/2026/05/app-tela-2.png", title: "Acordes sofisticados", desc: "Tensões e variações que enriquecem o som." },
            { img: "https://eliabcamposteclas.com/wp-content/uploads/2026/05/app-tela-3.jpg", title: "Aplicação imediata", desc: "Sem teoria longa. Olhou, tocou." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-card-dark border border-primary/25 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all group"
            >
              <div className="h-40 md:h-48 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODULES SECTION */}
      <section className="section-padding bg-zinc-950">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-display font-extrabold mb-4">O que você recebe no app</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Um ecossistema completo para evoluir no teclado com clareza e rapidez. Um dicionário prático, visual e direto ao ponto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-linear-to-b from-zinc-900 to-black p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 border-primary/60 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-[9px] font-black text-black">ACESSO PREMIUM</div>
            <h3 className="text-primary text-lg md:text-xl font-extrabold mb-3 md:mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" /> Área de Membros
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">Ambiente organizado para acessar o app, conteúdos extras e atualizações contínuas.</p>
          </motion.div>

          {[
            { icon: <Layout className="w-5 h-5 md:w-6 md:h-6" />, title: "Dicionário de Acordes", desc: "Mais de 200 acordes sofisticados, organizados por tom e variação." },
            { icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />, title: "Visualização no Teclado", desc: "Teclado ilustrado mostrando exatamente onde posicionar os dedos." },
            { icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />, title: "Aplicação Musical", desc: "Funciona para louvor, pop, gospel, MPB e jazz profissional." }
          ].map((m, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-linear-to-b from-zinc-900 to-black p-6 md:p-8 rounded-2xl md:rounded-3xl border border-primary/25"
            >
              <h3 className="text-primary text-lg md:text-xl font-extrabold mb-3 md:mb-4 flex items-center gap-2">
                {m.icon} {m.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BIOGRAPHY SECTION */}
      <section className="section-padding bg-black overflow-hidden border-t border-primary/10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            {/* Foto do Autor */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[80px] md:blur-[120px] rounded-full" />
              <div className="relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-primary/30 to-transparent blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 max-w-sm mx-auto lg:max-w-none">
                  <img 
                    src="https://eliabcamposteclas.com/wp-content/uploads/2026/05/app-tela-1.jpg" 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    alt="Eliab Campos"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </motion.div>

            {/* Texto Biografia */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-center lg:text-left mt-4 lg:mt-0"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
                <span className="text-primary text-[10px] md:text-xs font-black tracking-widest uppercase">Referência em Teclado</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6 md:mb-8 leading-tight">
                Quem é <span className="text-primary">Eliab Campos?</span>
              </h2>

              <div className="space-y-4 md:space-y-6 text-gray-300 text-base md:text-xl leading-relaxed">
                <p>
                  Com <span className="text-white font-bold">mais de 15 anos</span> de estrada como tecladista profissional, Eliab Campos dedicou sua carreira a desmistificar a harmonia complexa para músicos de todos os níveis.
                </p>
                <p>
                  Sua autoridade no nicho é consolidada por milhares de alunos que já aprenderam como sair do básico e atingir um som profissional com clareza.
                </p>
                <p className="border-l-2 border-primary pl-4 md:pl-6 italic text-white/90 text-sm md:text-lg text-left inline-block lg:block">
                  "Este app é a síntese de anos de prática, organizado para que você tenha em mãos a mesma sofisticação de um grande pianista."
                </p>
              </div>

              <div className="mt-8 md:mt-10 flex items-center justify-center lg:justify-start gap-8 md:gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-white">+15 anos</span>
                  <span className="text-primary text-[10px] md:text-xs uppercase font-bold tracking-widest">Experiência</span>
                </div>
                <div className="w-px h-10 md:h-12 bg-primary/20" />
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-white">Milhares</span>
                  <span className="text-primary text-[10px] md:text-xs uppercase font-bold tracking-widest">De Alunos</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="oferta" className="section-padding bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full -z-10" />
        
        <h2 className="text-2xl md:text-5xl font-display font-extrabold text-center mb-16">
          Acesso completo <span className="text-primary">ao app</span>
        </h2>

        <div className="max-w-md mx-auto px-2 md:px-0">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-card-dark rounded-[2rem] md:rounded-3xl p-8 md:p-10 border border-primary/40 shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_90px_rgba(229,57,53,0.3)] relative"
          >
            {/* iOS STYLE MOCKUP */}
            <div className="relative w-full flex justify-center mb-8 pointer-events-none">
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotateX: [12, 14, 12]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-[200px]"
              >
                <div className="w-full h-full bg-primary/20 rounded-2xl blur-xl md:blur-2xl absolute inset-0" />
                <img 
                  src="https://eliabcamposteclas.com/wp-content/uploads/2026/05/app-tela-2.png" 
                  className="relative z-10 w-full rotate-z-[-3deg]"
                  alt="Mockup App"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="text-primary text-[10px] md:text-xs font-black tracking-widest text-center mb-6 md:mb-8">ACESSO IMEDIATO</div>
            <h3 className="text-xl md:text-2xl font-black text-center mb-8 md:mb-10">Dicionário de Acordes</h3>

            <ul className="space-y-3 mb-8 md:mb-10">
              {[
                "+200 acordes sofisticados",
                "Visualização no teclado",
                "Uso direto no celular",
                "Atualizações futuras",
                "Pagamento único",
                "Acesso vitalício"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <div className="bg-green-500 rounded-full p-1 shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-8 md:mb-10">
              <span className="text-gray-500 text-xs md:text-sm block line-through opacity-60 mb-1">De R$67,00</span>
              <span className="text-gray-500 text-xs md:text-sm">Por apenas</span>
              <div className="text-4xl md:text-5xl font-black text-primary my-1 md:my-2">R$19,90</div>
              <small className="text-gray-500 uppercase tracking-tighter text-[10px] md:text-xs">pagamento único</small>
            </div>

            <a href="https://pay.wiapy.com/KWC5t-W5x9" className="cta-button w-full block text-center py-4 px-6 md:py-4.5">
              QUERO ACESSAR AGORA
            </a>
          </motion.div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Pagamento 100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Entrega imediata</span>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="section-padding bg-black">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="max-w-4xl mx-auto bg-card-dark border border-primary/30 p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] text-center shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_70px_rgba(229,57,53,0.2)]"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-extrabold mb-4 md:mb-6">
            Garantia de <span className="text-primary">7 dias</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
            Acesse o app, explore os acordes e teste na prática.<br />
            Se não fizer sentido pra você, devolvemos 100% do seu dinheiro.
          </p>
          <p className="text-primary font-bold text-lg md:text-xl uppercase tracking-wider">Sem burocracia. Sem perguntas.</p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="section-padding max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-display font-extrabold text-center mb-16">
          Dúvidas <span className="text-primary">frequentes</span>
        </h2>
        
        <div className="space-y-2 border-t border-primary/25">
          {FAQ_DATA.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-linear-to-r from-primary to-primary-light py-8 px-6 text-center text-black font-bold">
        <p className="flex items-center justify-center gap-2">
          Eliab Campos Teclas <Layers className="w-5 h-5" /> © {new Date().getFullYear()} – Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
