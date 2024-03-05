
import React, { useState } from 'react';
import { Flex } from '@radix-ui/themes';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Button } from '../../../components/ui/button';
import { ChevronRightIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { PlusIcon } from 'lucide-react';
import CadastroDialog from '../../../components/CadastroDialog';
import TableComponent from '../../../components/TableComponent';

const AssistantComponent: React.FC = () => {
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
    <>
    <div>
      <p style={{ marginTop: '32px', fontFamily: 'Arial', fontWeight: 'normal', fontSize: '14px', color: '#121929' }}>
        Selecione o Assistente Comercial
      </p>
      <div>
  <div > 

<div className="flex items-center">
    <Select>
    <SelectTrigger className="w-[388px] bg-white mt-2 rounded-xl shadow-sm">
      <SelectValue placeholder="Selecione"/>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup  className="bg-white rounded-xl">
        {/* <SelectLabel>Selecione</SelectLabel> */}
        <SelectItem value="Fulano">Fulano</SelectItem>
        <SelectItem value="Ciclano">Ciclano</SelectItem>
        <SelectItem value="Beltrano">Beltrano</SelectItem>
        <SelectItem value="Harry Potter">Beltrano</SelectItem>
        <SelectItem value="Rony Wesley">Beltrano</SelectItem>
        <SelectItem value="Luna Lovigod">Beltrano</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>

  {/* <Button className="bg-customBlue-500 shadow-sm ml-4 mt-2 rounded-full w-[54px] h-[43px] transition duration-300 ease-in-out transform hover:shadow-xl" variant="outline" size="icon">
            <PlusCircledIcon className="w-[20px] h-[20px] text-white" />
  </Button> */}

{/* <CadastroDialog isOpen={cadastroDialogAberto} onClose={fecharCadastroDialog} /> */}



    <Button className="bg-customBlue-500 shadow-sm ml-4 mt-2 rounded-full w-[54px] h-[43px] transition duration-300 ease-in-out transform hover:shadow-xl"
      variant="outline" size="icon" onClick={abrirCadastroDialog}>
        <PlusCircledIcon className="w-[20px] h-[20px] text-white" />
    </Button>

    <CadastroDialog titleDialog='Cadastro de Assistente Comercial' param1='Nome Completo' param2='Email' param3='Telefone' isOpen={cadastroDialogAberto} onClose={fecharCadastroDialog} />
      







  {/* <Button onClick={abrirCadastroDialog} className="bg-customBlue-500 shadow-sm ml-4 mt-2 rounded-full w-[54px] h-[43px]" variant="outline" size="icon">
    <PlusCircledIcon className="w-[20px] h-[20px] text-white" />
    <CadastroDialog isOpen={cadastroDialogAberto} onClose={fecharCadastroDialog} />
  </Button> */}
</div>

    {/* <Flex> */}
        {/* <Select.Root defaultValue="Fulano" >
          <Select.Trigger radius="large" />
          <Select.Content>
            <Select.Item value="Fulano">Fulano</Select.Item>
            <Select.Item value="Ciclano">Ciclano</Select.Item>
            <Select.Item value="Beltrano">Beltrano</Select.Item>
          </Select.Content>
        </Select.Root> */}
    {/* </Flex> */}


  </div>
</div>

    </div>

    {/* <div key="component1">
      <TableComponent
        tableHeaderText="Carteira do {SelectItem}"
        button1={{
          text: "",
          onClick: abrirCadastroDialog,
        }}
        button2={{ text: "Desvincular", onClick: () => console.log("Botão 2 clicado") }}
      />
    </div> */}
    </>
  );
};

export default AssistantComponent;
