// HomePage.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import AssistantComponent from './components/AssistantComponent';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
  <Sidebar />

  {/* Conteúdo Principal */}
  <div className="flex-1 overflow-hidden p-4 pl-32"> {/* Adicione a classe "pl-8" para padding à esquerda */}
    {/* Conteúdo principal da página */}
    <h1 style={{ fontWeight: 'bold', fontSize: '28px', color: '#121929', fontFamily: 'Arial' }}>
    Carteira de Clientes
  </h1>
  <AssistantComponent />
  </div>
</div>
  );
};

export default Home;
