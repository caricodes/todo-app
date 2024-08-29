import Image from "next/image";
import Prancheta from "/public/notebook.svg";
export default function EmptyTasksNotice() {
  return (
    <div className='py-40 items-center flex flex-col space-y-1'>
      <Image src={Prancheta} alt='Prancheta' className='mb-4' />
      <p className='text-center text-gray-500 font-bold'>Você ainda não tem tarefas cadastradas</p>
      <p className='text-center text-gray-500'>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
