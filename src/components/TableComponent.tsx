import { Badge, Table, TextField } from '@radix-ui/themes';
import React from 'react';
import { Button } from './ui/button';
import { MagnifyingGlassIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { ArrowRight } from 'lucide-react';
import CadastroDialog from './CadastroDialog';
import { Form } from './ui/form';
import { Checkbox } from './ui/checkbox';
// import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './ui/table';

interface TableComponentProps {
  tableHeaderText: string;
  button1: {
    text: string;
    onClick: () => void;
  };
  button2: {
    text: string;
    onClick: () => void;
  };

  // clients: Client[];
  // onSubmit: (selectedClients: Client[]) => void;
}

interface Client {
  codigo: string;
  parceiro: string;
  rede: string;
  checked: boolean;
}

const TableComponent: React.FC<TableComponentProps> = ({ tableHeaderText, button1, button2 }) => {
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

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "",
    }
    // ,
    // {
    //   invoice: "INV007",
    //   paymentStatus: "Unpaid",
    //   totalAmount: "$300.00",
    //   paymentMethod: "Credit Card",
    // },
  ]

  
  
  return (
    <div style={divStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px'}}>
        <h2 style={h2Style}>{tableHeaderText}</h2>
        <Badge radius="full" style={{ 
          border: '1px solid rgba(18, 25, 41, 0.12)', 
          color: '#00BDFF',
          background: 'transparent'
        }}>
          23
        </Badge>



        <div className="flex ml-auto">
        <Button
          className="bg-customBlue-500 shadow-sm mt-2 ml-0 rounded-full w-[144px] h-[26px] transition duration-300 ease-in-out transform hover:shadow-xl"
          variant="outline"
          size="icon"
          onClick={button1.onClick}>
            <PlusCircledIcon className="w-[18px] h-[18px] text-white" />
            <span style={{ fontFamily: 'Arial', fontWeight: 'normal', fontSize: '12px', color: 'white', marginLeft: '4px' }}>{button1.text}</span>
          </Button>
        
          <Button
            onClick={button2.onClick}
            className="bg-blue-500 shadow-sm ml-2 mt-2 rounded-full w-[98px] h-[26px] transition duration-300 ease-in-out transform hover:shadow-xl"
            variant="outline"
            size="icon"
          >
            <span style={{ fontFamily: 'Arial', fontWeight: 'normal', fontSize: '12px', color: 'white', marginRight: '6px' }}>{button2.text}</span>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1" fill="none"/>
              <path d="M8 6L10 8L8 10" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 8H5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>

      <div className='mt-4' >
        <TextField.Root className="" style={{ width: '590px', margin: 'auto'}}>
            <TextField.Slot>
              <MagnifyingGlassIcon height="18" width="18" style={{ color: '#121929' }}/>
            </TextField.Slot>
            <TextField.Input radius='full' placeholder="Buscar" style={{ fontFamily: 'Arial', fontSize: '14px', paddingBottom: '0'}}/>
          </TextField.Root>
      </div>













      <div className="mt-4">
      {/* <Form onSubmit={handleSubmit}>
          {clients.map((client, index) => (
            <div key={index} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <Checkbox
                checked={client.checked}
                onCheckedChange={(checked) => handleCheckboxChange(index, checked)}
              />
              <div className="space-y-1 leading-none">
                <div>{`Código: ${client.codigo}`}</div>
                <div>{`Parceiro: ${client.parceiro}`}</div>
                <div>{`Rede: ${client.rede}`}</div>
              </div>
            </div>
          ))}
          <Button type="submit">Adicionar</Button>
        </Form> */}





























      {/* <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
          <Table.Cell>danilo@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>

        </Table.Body>
      </Table.Root> */}


      </div>
      {/* <CadastroDialog isOpen={false} onClose={() => {}} /> */}
    </div>
  );
};

export default TableComponent;
