import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Importa as imagens do atleta e do logo
import atletaImg from '../assets/images/ATLETAS.png';
import logoImg2 from '../assets/images/esportesbr.jpeg';
import cieloImg from '../assets/images/CesarCielo.jpg';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-energy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Conectando Atletas e Patrocinadores
              </h1>
              <p className="text-xl mb-8">
                A plataforma profissional que une talentos esportivos e marcas em busca de parcerias de sucesso.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/cadastro" className="px-6 py-3 bg-white text-primary-color font-medium rounded-md hover:bg-gray-100 transition-colors text-center btn-accent">
                  Criar Conta Grátis
                </a>
                <a href="/sobre" className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors text-center">
                  Saiba Mais
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-transparent">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img src={atletaImg} alt="Imagem do Atleta" className="object-cover w-full h-full" />
                  </div>
                </div>
                {/* Aqui o logo removido ficava, mas foi excluído */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Estatísticas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-color">10K+</p>
              <p className="text-gray-600 mt-2">Atletas Cadastrados</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary-color">500+</p>
              <p className="text-gray-600 mt-2">Patrocinadores</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent-color">2.5K+</p>
              <p className="text-gray-600 mt-2">Parcerias Realizadas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green">30+</p>
              <p className="text-gray-600 mt-2">Modalidades Esportivas</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-blue rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-primary-color">Crie seu Perfil</h3>
              <p className="text-gray-600 text-center">
                Atletas: Destaque suas conquistas, habilidades e métricas de desempenho.
                Patrocinadores: Apresente sua marca e objetivos de patrocínio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-green rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-secondary-color">Conecte-se</h3>
              <p className="text-gray-600 text-center">
                Encontre parceiros ideais através de nosso sistema de busca avançado e recomendações personalizadas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-gradient-orange rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-accent-color">Feche Parcerias</h3>
              <p className="text-gray-600 text-center">
                Negocie diretamente, estabeleça contratos e acompanhe o desempenho das suas parcerias em um só lugar.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Histórias de Sucesso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                    <img src={cieloImg} alt="Imagem do Cesar" className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-semibold">Cesar Cielo</h4>
                  <p className="text-sm text-gray-600">Atleta de Natação</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Através do ConectAtleta, consegui meu primeiro patrocínio profissional. A plataforma facilitou todo o processo de conexão e negociação com a marca, permitindo que eu me concentrasse no meu desempenho nas competições."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                    <img src={logoImg2} alt="Logo do Patrocinador" className="object-contain w-full h-full p-2" />
                </div>
                <div>
                  <h4 className="font-semibold">Esportes Brasil</h4>
                  <p className="text-sm text-gray-600">Empresa de Equipamentos Esportivos</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Encontramos atletas que realmente se alinham com os valores da nossa marca. O sistema de busca avançada nos permitiu filtrar por modalidade, região e métricas de desempenho, otimizando nosso investimento em patrocínios."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-energy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Conectar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de atletas e patrocinadores que já estão construindo parcerias de sucesso na maior rede profissional esportiva do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/cadastro" className="px-6 py-3 bg-white text-accent-color font-medium rounded-md hover:bg-gray-100 transition-colors btn-accent">
              Criar Conta Grátis
            </a>
            <a href="/login" className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors">
              Entrar
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
