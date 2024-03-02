import React from 'react'; 
import TableComponent from '../../../components/TableComponent';

interface ClientComponentProps {
  // Adicione as propriedades necessárias aqui
}

const ClientComponent: React.FC<ClientComponentProps> = (props) => {
  return (
    <TableComponent>
    <h2>Detalhes do Cliente e Assistente</h2>
  </TableComponent>
  );
};

export default ClientComponent;
