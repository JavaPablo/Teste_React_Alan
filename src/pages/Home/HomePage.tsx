import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import AssistantComponent from './components/AssistantComponent';
import ClientComponent from './components/ClientComponent';
import styled from 'styled-components';
import TableComponent from '../../components/TableComponent';
import CadastroDialog from '../../components/CadastroDialog';

const FlexContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const Home: React.FC = () => {

  const [cadastroDialogAberto, setCadastroDialogAberto] = useState(false);

  const abrirCadastroDialog = () => {
    console.log('botao true 2');
    setCadastroDialogAberto(true);
  };

  const fecharCadastroDialog = () => {
    console.log('botao false');
    setCadastroDialogAberto(false);
  };

  return (
    <div className="flex h-screen">
  <Sidebar />

  <div className="flex-1 overflow-hidden p-4 pl-32"> 
    <h1 style={{ fontWeight: 'bold', fontSize: '28px', color: '#121929', fontFamily: 'Arial' }}>
      Carteira de Clientes
   </h1>
  <AssistantComponent />

  {/* <ClientComponent /> */}

  <FlexContainer>
      <div>
        <TableComponent
            tableHeaderText="Clientes (Não vinculados)"
            button1={{
              text: "Adicionar cliente",
              onClick: abrirCadastroDialog,
            }}
            button2={{ text: "Vincular", onClick: () => console.log("Botão 2 clicado") }}
          />
      </div>

      <CadastroDialog titleDialog='Cadastro de Cliente' param1='Código do Cliente' param2='Nome Completo' param3='Rede' isOpen={cadastroDialogAberto} onClose={fecharCadastroDialog} />

      <div>
        <TableComponent
            tableHeaderText="Carteira do {SelectItem}"
            button1={{
              text: "",
              onClick: abrirCadastroDialog,
            }}
            button2={{ text: "Desvincular", onClick: () => console.log("Botão 2 clicado") }}
          />
      </div>
    </FlexContainer>
  </div>
</div>
  );
};

export default Home;
