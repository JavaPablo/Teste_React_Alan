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
// import * as Dialog from '@radix-ui/react-dialog';
// import { Button, Flex, Text, TextField } from '@radix-ui/themes';


interface CadastroDialogProps {
  isOpen: boolean;
  onClose: () => void;
  titleDialog: string;
  param1: string;
  param2: string;
  param3: string;
}

const CadastroDialog: React.FC<CadastroDialogProps> = ({ isOpen, onClose, titleDialog, param1, param2, param3 }) => {
  const [dialogOpen, setDialogOpen] = useState(isOpen);
  console.log('botao true');

  return (
    // <Dialog.Root>
    //   <Dialog.Trigger>
    //     <Button className="bg-customBlue-500 shadow-sm ml-4 mt-2 rounded-full w-[54px] h-[43px]" variant="outline">
    //       <PlusCircledIcon className="w-[20px] h-[20px] text-white" />
    //     </Button>
    //   </Dialog.Trigger>

    //   <Dialog.Content style={{ maxWidth: 450 }}>
    //     <Dialog.Title>Edit profile</Dialog.Title>
    //     <Dialog.Description >
    //       Make changes to your profile.
    //     </Dialog.Description>

    //     <Flex direction="column" gap="3">
    //       <label>
    //         <Text as="div" size="2" mb="1" weight="bold">
    //           Name
    //         </Text>
    //         <TextField.Input
    //           defaultValue="Freja Johnsen"
    //           placeholder="Enter your full name"
    //         />
    //       </label>
    //       <label>
    //         <Text as="div" size="2" mb="1" weight="bold">
    //           Email
    //         </Text>


    //         <TextField.Input
    //           defaultValue="freja@example.com"
    //           placeholder="Enter your email"
    //         />
    //       </label>
    //     </Flex>

    //     <Flex gap="3" mt="4" justify="end">
    //       <Dialog.Close>
    //         <Button  color="gray">
    //           Cancel
    //         </Button>
    //       </Dialog.Close>
    //       <Dialog.Close>
    //         <Button>Save</Button>
    //       </Dialog.Close>
    //     </Flex>
    //   </Dialog.Content>
    // </Dialog.Root>

    <Dialog open={isOpen}>
    {/* <DialogTrigger asChild>
       <Button style={{ display: 'none' }} className=" bg-customBlue-500 shadow-sm ml-4 mt-2 rounded-full w-[54px] h-[43px] transition duration-300 ease-in-out transform hover:shadow-xl" variant="outline" size="icon">
            <PlusCircledIcon className="w-[20px] h-[20px] text-white" />
       </Button>
    </DialogTrigger> */}
    <DialogContent className="sm:max-w-[800px] h-[479px] bg-white">
      <DialogHeader>
        <DialogTitle className="font-sans">{titleDialog}</DialogTitle>
        {/* <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription> */}
      </DialogHeader>
      <div className="grid gap-4 border border-bg-customDark-12 rounded-3xl p-6">
        <div className="grid grid-cols-4 items-center gap-2">
            <div className="col-span-4 text-left">
            <Label htmlFor="codeClient">{param1}</Label>
            </div>
            <div className="col-span-4">
            <Input id="codeClient" placeholder="Digite seu nome" className="rounded-xl p-4" />
            </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-2">
            <div className="col-span-4 text-left">
            <Label htmlFor="nameClient">{param2}</Label>
            </div>
            <div className="col-span-4">
            <Input id="nameClient" placeholder="Digite seu e-mail" className="rounded-xl p-4" />
            </div>
        </div>
        <div className="grid grid-cols-4 items-center gap-2">
            <div className="col-span-4 text-left">
            <Label htmlFor="network">{param3}</Label>
            </div>
            <div className="col-span-4">
            <Input id="network" placeholder="Digite seu telefone" className="rounded-xl p-4" />
            </div>
        </div>
        </div>
        <div className="mt-8">
          <DialogFooter>
              <DialogClose asChild>
                  <Button onClick={onClose} type="button" variant="secondary" className="bg-customDark-12 w-[255px] h-[43px] transition duration-300 ease-in-out transform hover:shadow-xl rounded-3xl">
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
