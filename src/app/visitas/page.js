"use client";

import Link from "next/link";
import { useState } from "react";

export default function Visitas() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    }, 1500);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  return (
    <>
      {/* Hero Section */}
      <section className="h-screen bg-[linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),radial-gradient(42.32%_51.73%_at_50%_40.77%,#C6C6C6_10%,#88B9D6_100%)] flex items-center justify-center relative">
        <div className="text-center text-white max-w-4xl px-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[jejumyeongjo] mb-6">
            Visitas
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Experimente a exclusividade dos nossos imóveis com visitas
            personalizadas
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-white"></div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-[jejumyeongjo] text-center text-gray-900 mb-16">
            Como Funcionam Nossas Visitas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-[jejumyeongjo] text-gray-900 mb-4">
                Agendamento
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Preencha o formulário abaixo com suas preferências de data e
                horário para agendar sua visita personalizada.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-[jejumyeongjo] text-gray-900 mb-4">
                Confirmação
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nossa equipe entrará em contato para confirmar os detalhes e
                preparar uma experiência personalizada de acordo com suas
                necessidades.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-[jejumyeongjo] text-gray-900 mb-4">
                Experiência
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Um consultor especializado irá recebê-lo e guiá-lo através da
                propriedade, destacando características e respondendo suas
                perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-[jejumyeongjo] text-center text-gray-900 mb-10">
            Agende Sua Visita
          </h2>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Escolha o dia e horário que melhor se adequam à sua agenda. Nossa
            equipe está pronta para proporcionar uma experiência inesquecível.
          </p>

          {formStatus.isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <svg
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                Visita Agendada com Sucesso!
              </h3>
              <p className="text-green-700 mb-6">
                Agradecemos seu interesse. Um de nossos consultores entrará em
                contato em até 24 horas para confirmar os detalhes da sua
                visita.
              </p>
              <button
                className="bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity duration-200"
                onClick={() =>
                  setFormStatus({
                    isSubmitting: false,
                    isSubmitted: false,
                    error: null,
                  })
                }
              >
                Agendar outra visita
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#88B9D6] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#88B9D6] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#88B9D6] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tipo de Imóvel *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#88B9D6] focus:border-transparent outline-none transition-all"
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Casa">Casa</option>
                    <option value="Cobertura">Cobertura</option>
                    <option value="Mansão">Mansão</option>
                    <option value="Terreno">Terreno</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Data Preferencial *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={formattedDate}
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#88B9D6] focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Horário Preferencial *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#88B9D6] focus:border-transparent outline-none transition-all"
                  >
                    <option value="" disabled>
                      Selecione um horário
                    </option>
                    <option value="9:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Observações ou Preferências
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#88B9D6] focus:border-transparent outline-none transition-all"
                  placeholder="Compartilhe qualquer informação adicional que possa nos ajudar a personalizar sua visita."
                ></textarea>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity duration-200 inline-flex items-center"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Agendando...
                    </>
                  ) : (
                    "Agendar Visita"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-[#C6C6C6] to-[#88B9D6] h-80 rounded-2xl shadow-2xl"></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-[jejumyeongjo] text-gray-900 mb-8">
                Benefícios de uma Visita Presencial
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Uma visita presencial proporciona uma experiência sensorial
                completa, permitindo que você perceba detalhes, ambientes e
                sensações que apenas fotografias não conseguem capturar.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Experiência sensorial completa
                    </span>{" "}
                    - perceba a luminosidade, acústica e sensação dos ambientes
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Consultoria personalizada
                    </span>{" "}
                    - receba orientações específicas sobre o imóvel e suas
                    possibilidades
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Visualização do entorno
                    </span>{" "}
                    - conheça a vizinhança, serviços próximos e infraestrutura
                    da região
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">
                      Tomada de decisão mais segura
                    </span>{" "}
                    - elimine dúvidas e tenha mais confiança na sua escolha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-[jejumyeongjo] text-center text-gray-900 mb-16">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quanto tempo dura uma visita?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nossas visitas têm duração média de 45 a 60 minutos, mas o tempo
                pode variar de acordo com o tamanho do imóvel e suas
                necessidades específicas. Reservamos o tempo necessário para que
                você conheça todos os detalhes da propriedade.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Posso visitar mais de um imóvel no mesmo dia?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sim, é possível agendar visitas a múltiplos imóveis no mesmo
                dia. Basta informar essa preferência no campo de observações do
                formulário, e nossa equipe organizará um roteiro otimizado para
                você.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Preciso fazer algum pagamento para agendar uma visita?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Não, o agendamento e a realização de visitas são serviços
                totalmente gratuitos. Nosso compromisso é proporcionar uma
                experiência completa para que você possa tomar a melhor decisão.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Posso cancelar ou remarcar minha visita?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sim, compreendemos que imprevistos acontecem. Solicitamos apenas
                que nos avise com pelo menos 24 horas de antecedência para que
                possamos reorganizar nossa agenda. Para cancelar ou remarcar,
                basta entrar em contato conosco por telefone ou email.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contato"
              className="text-[#88B9D6] hover:text-[#6d9db9] font-medium inline-flex items-center"
            >
              Tem mais perguntas? Entre em contato conosco
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#88B9D6] to-[#C6C6C6] text-white">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl md:text-4xl font-[jejumyeongjo] mb-6">
            Pronto para Conhecer seu Futuro Lar?
          </h2>
          <p className="text-xl mb-10 font-light max-w-3xl mx-auto">
            Agende sua visita agora e dê o primeiro passo em direção à
            propriedade dos seus sonhos.
          </p>
          <a
            href="#agendamento"
            className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("form");
              element.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Agendar Visita
          </a>
        </div>
      </section>
    </>
  );
}
