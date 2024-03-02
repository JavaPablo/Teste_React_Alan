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
  
  return (
    <div style={divStyle}>
      {children}
    </div>
  );
};

export default TableComponent;
