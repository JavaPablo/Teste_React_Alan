import { Badge } from '@radix-ui/themes';
import React from 'react';

interface TableComponentProps {
  children?: React.ReactNode;  // Permitir conteúdo adicional como filho
}
const TableComponent: React.FC<TableComponentProps> = ({ children }) => {
  const divStyle: React.CSSProperties = {
    backgroundColor: 'white',
    height: '490px',
    width: '638px',
    padding: '20px',
    borderRadius: '18px',
    marginTop: '24px',
  };

  const h2Style: React.CSSProperties = {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#121929',
  };
  
  return (
    <div style={divStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
        <h2 style={h2Style}>{children}</h2>
        <Badge radius="full" style={{ 
          border: '1px solid rgba(18, 25, 41, 0.12)', 
          color: '#00BDFF',
          background: 'transparent'
        }}>
          23
        </Badge>
      </div>



      
    </div>
  );
};

export default TableComponent;
