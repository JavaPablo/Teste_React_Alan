import { Badge, TextField } from '@radix-ui/themes';
import React from 'react';
import { Button } from './ui/button';
import { MagnifyingGlassIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { ArrowRight } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './ui/table';

interface TableComponentProps {
  children?: React.ReactNode;  
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

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  return (
    <div style={divStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px'}}>
        <h2 style={h2Style}>{children}</h2>
        <Badge radius="full" style={{ 
          border: '1px solid rgba(18, 25, 41, 0.12)', 
          color: '#00BDFF',
          background: 'transparent'
        }}>
          23
        </Badge>



        <div className="flex ml-auto">
          <Button className="bg-customBlue-500 shadow-sm mt-2 ml-0 rounded-full w-[144px] h-[26px] transition duration-300 ease-in-out transform hover:shadow-xl" variant="outline" size="icon">
            <PlusCircledIcon className="w-[18px] h-[18px] text-white" />
            <span style={{ fontFamily: 'Arial', fontWeight: 'normal', fontSize: '12px', color: 'white', marginLeft: '4px' }}>Adicionar cliente</span>
          </Button>

          {/* <Button className="bg-blue-500 shadow-sm ml-2 mt-2 rounded-full w-[98px] h-[26px] transition duration-300 ease-in-out transform hover:shadow-xl" variant="outline" size="icon">
            <span style={{ fontFamily: 'Arial', fontWeight: 'normal', fontSize: '12px', color: 'white', marginRight: '4px' }}>Vincular</span>
            <ArrowRight  className="w-[16px] h-[16px] text-white" />
          </Button> */}

          <Button className="bg-blue-500 shadow-sm ml-2 mt-2 rounded-full w-[98px] h-[26px] transition duration-300 ease-in-out transform hover:shadow-xl" variant="outline" size="icon">
            <span style={{ fontFamily: 'Arial', fontWeight: 'normal', fontSize: '12px', color: 'white', marginRight: '6px' }}>Vincular</span>
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














      <div>
      <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
      </div>
      
    </div>
  );
};

export default TableComponent;
