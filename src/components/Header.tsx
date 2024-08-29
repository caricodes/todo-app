import Image from "next/image";
import TodoLogo from "/public/Logo.svg";
import { PlusCircle } from "lucide-react";
import React from "react";

interface HeaderProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTask: () => void;
}

export default function Header({ inputValue, onInputChange, onAddTask }: HeaderProps) {
  return (
    <header className='h-[200px] bg-gray-300 w-full flex'>
      <div className='max-w-6xl m-auto flex flex-col items-center gap-[56px] pt-[42px] pb-[66px]'>
        <Image src={TodoLogo} alt='ToDo App' />
        <div className='flex items-center gap-2'>
          <input
            placeholder='Adicione uma nova tarefa'
            value={inputValue}
            onChange={onInputChange}
            className='px-6 py-4 rounded-lg gap-2 font-medium w-[736px] outline-none border-2 border-gray-300'
          />
          <button
            onClick={onAddTask}
            className='flex items-center bg-purple-dark text-gray-100 px-6 py-4 rounded-lg gap-2 font-medium active:bg-purple-base'
          >
            Criar <PlusCircle className='size-4 text-gray-100' />
          </button>
        </div>
      </div>
    </header>
  );
}
