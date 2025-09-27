import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen bg-[linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),radial-gradient(42.32%_51.73%_at_50%_40.77%,#C6C6C6_10%,#88B9D6_100%)] flex items-center justify-center relative">
        <div className="text-center text-white max-w-4xl px-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[jejumyeongjo] mb-6">
            Sobre a Palazzo
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Redefinindo o conceito de moradia de luxo através de propriedades
            excepcionais e experiências únicas
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-white"></div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-[jejumyeongjo] text-gray-900 mb-8">
                Nossa História
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A Palazzo nasceu da visão de transformar sonhos em realidade
                através de propriedades extraordinárias. Especializamo-nos em
                imóveis de alto padrão, oferecendo uma seleção cuidadosamente
                curada de propriedades de luxo em localizações privilegiadas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa missão é conectar você a lares exclusivos que combinam
                sofisticação, conforto e design excepcional, criando
                experiências que transcendem as expectativas convencionais do
                mercado imobiliário.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] h-80 rounded-2xl shadow-2xl"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-[jejumyeongjo] text-center text-gray-900 mb-16">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-[jejumyeongjo] text-gray-900 mb-4">
                Excelência
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Comprometimento inabalável com a mais alta qualidade em cada
                propriedade e serviço oferecido.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-[jejumyeongjo] text-gray-900 mb-4">
                Confiança
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Relacionamentos construídos sobre transparência, integridade e
                compromisso duradouro com nossos clientes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-[jejumyeongjo] text-gray-900 mb-4">
                Personalização
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cada cliente é único, e nossa abordagem personalizada reflete
                suas necessidades e aspirações específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-[#C6C6C6] to-[#88B9D6] h-80 rounded-2xl shadow-2xl"></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-[jejumyeongjo] text-gray-900 mb-8">
                Nossa Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Com anos de experiência no mercado de luxo, desenvolvemos um
                profundo entendimento sobre o que distingue uma propriedade
                verdadeiramente excepcional.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#88B9D6] rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-700">
                    Avaliação especializada de propriedades de alto padrão
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#88B9D6] rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-700">
                    Consultoria personalizada para investimentos imobiliários
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#88B9D6] rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-700">
                    Acesso exclusivo a propriedades off-market
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#88B9D6] rounded-full mt-2 mr-4"></div>
                  <p className="text-gray-700">
                    Suporte completo durante todo o processo de aquisição
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] text-white">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-4xl md:text-5xl font-[jejumyeongjo] mb-8">
            Pronto para Encontrar Seu Palazzo?
          </h2>
          <p className="text-xl mb-12 font-light leading-relaxed">
            Deixe-nos guiá-lo em direção à propriedade dos seus sonhos. Cada
            jornada começa com uma conversa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contato"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Entrar em Contato
            </Link>
            <Link
              href="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Ver Propriedades
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
