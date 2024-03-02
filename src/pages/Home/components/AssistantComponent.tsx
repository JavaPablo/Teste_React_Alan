
import React, { useState } from 'react';
import { Flex } from '@radix-ui/themes';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Button } from '../../../components/ui/button';
import { ChevronRightIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { PlusIcon } from 'lucide-react';
import CadastroDialog from '../../../components/CadastroDialog';

const AssistantComponent: React.FC = () => {
  const [cadastroDialogAberto, setCadastroDialogAberto] = useState(false);

  const abrirCadastroDialog = () => {
    setCadastroDialogAberto(true);
  };

  const fecharCadastroDialog = () => {
    setCadastroDialogAberto(false);
  };

  return (
    <div>
      <p style={{ marginTop: '40px', fontFamily: 'Arial', fontWeight: 'normal', fontSize: '14px', color: '#121929' }}>
        Selecione o Assistente Comercial
      </p>
      <div>
  <div > 

<div className="flex items-center">
    <Select>
    <SelectTrigger className="w-[388px] bg-white mt-2 rounded-xl shadow-sm">
      <SelectValue placeholder="Selecione" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup  className="bg-white rounded-xl">
        {/* <SelectLabel>Selecione</SelectLabel> */}
        <SelectItem value="Fulano">Fulano</SelectItem>
        <SelectItem value="Ciclano">Ciclano</SelectItem>
        <SelectItem value="Beltrano">Beltrano</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>

<CadastroDialog isOpen={cadastroDialogAberto} onClose={fecharCadastroDialog} />

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
  );
};

export default AssistantComponent;
