import React from 'react'; 
import TableComponent from '../../../components/TableComponent';

interface ClientComponentProps {
  // Adicione as propriedades necessárias aqui
}

const ClientComponent: React.FC<ClientComponentProps> = (props) => {
  return (
    <TableComponent>
       Clientes (Não vinculados)
    </TableComponent>
  );
};

export default ClientComponent;
