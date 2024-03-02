import React, { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"
  import { Input } from "./ui/input"
  import { Label } from "./ui/label"
  import { Button } from './ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';


interface CadastroDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const CadastroDialog: React.FC<CadastroDialogProps> = ({ isOpen, onClose }) => {

  return (
    <Dialog >
    <DialogTrigger asChild>
       <Button className="bg-customBlue-500 shadow-sm ml-4 mt-2 rounded-full w-[54px] h-[43px]" variant="outline" size="icon">
            <PlusCircledIcon className="w-[20px] h-[20px] text-white" />
       </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[800px] h-[479px] bg-white">
      <DialogHeader>
        <DialogTitle className="font-sans">Cadastro de Cliente</DialogTitle>
        {/* <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription> */}
      </DialogHeader>
      <div className="grid gap-4 border border-bg-customDark-12 rounded-3xl p-6">
        <div className="grid grid-cols-4 items-center gap-2">
            <div className="col-span-4 text-left">
            <Label htmlFor="codeClient">Código do Cliente</Label>
            </div>
            <div className="col-span-4">
            <Input id="codeClient" placeholder="Digite a quantidade" className="rounded-xl p-4" />
            </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-2">
            <div className="col-span-4 text-left">
            <Label htmlFor="nameClient">Nome do Cliente</Label>
            </div>
            <div className="col-span-4">
            <Input id="nameClient" placeholder="Digite a quantidade" className="rounded-xl p-4" />
            </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-2">
            <div className="col-span-4 text-left">
            <Label htmlFor="network">Rede</Label>
            </div>
            <div className="col-span-4">
            <Input id="network" placeholder="Digite a quantidade" className="rounded-xl p-4" />
            </div>
        </div>
        </div>
        <div className="mt-8">
          <DialogFooter>
              <DialogClose asChild>
                  <Button type="button" variant="secondary" className="bg-customDark-12 w-[255px] h-[43px] transition duration-300 ease-in-out transform hover:shadow-xl rounded-3xl">
                      Cancelar
                  </Button>
              </DialogClose>
              <Button type="submit" className="bg-customBlue-500 text-white w-[255px] h-[43px] transition duration-300 ease-in-out transform hover:shadow-xl rounded-3xl">
                  Salvar
              </Button>
          </DialogFooter>
      </div>
    </DialogContent>
  </Dialog>
  );
};

export default CadastroDialog;
