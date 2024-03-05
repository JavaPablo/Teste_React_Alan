import React, { useState } from 'react';
import { Badge, Table, TextField } from '@radix-ui/themes';
import { Button } from './ui/button';
import { MagnifyingGlassIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { ArrowRight, Link } from 'lucide-react';
import CadastroDialog from './CadastroDialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from './ui/form';
import { Checkbox } from './ui/checkbox';
import { Controller } from 'react-hook-form';
import styled from 'styled-components';
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

interface Item {
  param1: string;
  param2: string;
  param3: string;
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

 
  const CheckboxWrapper = styled.div<{ isChecked: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 18px;
    background-color: #ebedef;
    margin-bottom: 10px;
    width: 590px;
    height: 45px;

    input {
      margin-right: 10px;
    }

    input:checked::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid #00bdff;
      border-radius: 18px;
      pointer-events: none;
    }
`;

  const simulatedData: Item[] = [
    { param1: 'XX30-2', param2: 'Cliente XYZ', param3: 'Rede 2' },
    { param1: 'XX30-2', param2: 'XX30-2', param3: 'Rede 2' },
    { param1: 'XX30-2', param2: 'XX30-2', param3: 'Rede 2' },
    { param1: 'XX30-2', param2: 'XX30-2', param3: 'Rede 2' },
    { param1: 'XX30-2', param2: 'XX30-2', param3: 'Rede 2' },
    { param1: 'XX30-2', param2: 'XX30-2', param3: 'Rede 2' },
    { param1: 'XX30-2', param2: 'XX30-2', param3: 'Rede 2' },
  ];

  const [headerCheckboxState, setHeaderCheckboxState] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState<boolean[]>(simulatedData.map(() => false));

  const handleHeaderCheckboxChange = () => {
    setHeaderCheckboxState(prevState => !prevState);
    setCheckboxStates(prevStates => prevStates.map(() => !headerCheckboxState));
  };

  const handleCheckboxChange = (index: number) => {
    setCheckboxStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      setHeaderCheckboxState(newStates.every(Boolean));
      return newStates;
    });
  };

  
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








     


      <div className="mt-0">

      {/* <Table.Root >
      <Table.Header>
        <div style={{}}>
          <input
            type="checkbox"
            checked={headerCheckboxState}
            onChange={handleHeaderCheckboxChange}
          />
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
        </div>
      </Table.Header>

      <Table.Body>
        {simulatedData.map((item, index) => (
          // <Table.Row 
          //   key={index} 
          //   style={{ 
          //     borderRadius: '20px', 
          //     backgroundColor: '#EAEDEE',
          //     marginBottom: '10px' }}>
          <div
            key={index}
            className={`table-row-item ${checkboxStates[index] ? 'checked' : ''}`}
            style={{ 
                  borderRadius: '18px', 
                  backgroundColor: '#EAEDEE',
                  marginBottom: '10px',
                  width: '590px',
                  height: '45px',
                  position: 'relative', }}
            >
            <input
              type="checkbox"
              checked={checkboxStates[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <Table.RowHeaderCell>{item.name}</Table.RowHeaderCell>
            <Table.Cell>{item.email}</Table.Cell>
            <Table.Cell>{item.group}</Table.Cell>

            <style >{`
              .table-row-item.checked input:focus::after {
                content: '';
                position: absolute;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
                border: 1px solid #00BDFF;
                border-radius: 18px;
                pointer-events: none;
              }
            `}</style>
            </div>
        ))}
      </Table.Body>
    </Table.Root> */}


  {/* <Table.Root>
      <Table.Header>
        <div>
          <input
            type="checkbox"
            checked={headerCheckboxState}
            onChange={handleHeaderCheckboxChange}
          />
          <Table.ColumnHeaderCell>Código</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Parceiro</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Rede</Table.ColumnHeaderCell>
        </div>
      </Table.Header>

      <Table.Body>
        {simulatedData.map((item, index) => (
          <CheckboxWrapper
            key={index}
            className={`${checkboxStates[index] ? 'checked' : ''}`}
          >
            <input
              type="checkbox"
              checked={checkboxStates[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <Table.RowHeaderCell>{item.param1}</Table.RowHeaderCell>
            <Table.Cell>{item.param2}</Table.Cell>
            <Table.Cell>{item.param3}</Table.Cell>
          </CheckboxWrapper>
        ))}
      </Table.Body>
    </Table.Root> */}

    <Table.Root >
      <Table.Header>
        <div style={{}}>
          <input
            type="checkbox"
            checked={headerCheckboxState}
            onChange={handleHeaderCheckboxChange}
          />
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
        </div>
      </Table.Header>

      <Table.Body>
        {simulatedData.map((item, index) => (
          <CheckboxWrapper
            key={index}
            isChecked={checkboxStates[index]}
            className={`table-row-item ${checkboxStates[index] ? 'checked' : ''}`}
          >
            <input
              type="checkbox"
              checked={checkboxStates[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <Table.RowHeaderCell>{item.param1}</Table.RowHeaderCell>
            <Table.Cell>{item.param2}</Table.Cell>
            <Table.Cell>{item.param3}</Table.Cell>
          </CheckboxWrapper>
        ))}
      </Table.Body>
    </Table.Root>































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
