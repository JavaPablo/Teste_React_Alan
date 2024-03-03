import React from 'react';
import Sidebar from '../../components/Sidebar';
import AssistantComponent from './components/AssistantComponent';
import ClientComponent from './components/ClientComponent';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
  <Sidebar />

  <div className="flex-1 overflow-hidden p-4 pl-32"> 
    <h1 style={{ fontWeight: 'bold', fontSize: '28px', color: '#121929', fontFamily: 'Arial' }}>
      Carteira de Clientes
   </h1>
  <AssistantComponent />

  <ClientComponent />
  </div>
</div>
  );
};

export default Home;
