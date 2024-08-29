"use client";

import React, { useEffect, useState } from "react";
import EmptyTasksNotice from "@/components/EmptyTasksNotice";
import Header from "@/components/Header";
import Separator from "@/components/Separator";
import { Trash } from "lucide-react";
import LineThroughApp from "@/components/LineThroughApp";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [hasTasks, setHasTasks] = useState<boolean>(false);

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const handleInpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setHasTasks(tasks.length > 0);
  }, [tasks]);

  return (
    <>
      <Header inputValue={inputValue} onInputChange={handleInpChange} onAddTask={handleAddTask} />

      {tasks.length > 0 ? (
        <div className='py-24 max-w-4xl m-auto space-y-6'>
          <div className='flex items-center gap-2'>
            <p className='text-center text-gray-500 font-medium'>Tarefas criadas</p>
            <p className='text-center bg-purple-light text-purple-dark font-medium py-1 px-2 rounded-2xl text-sm'>
              {tasks.length}
            </p>
          </div>

          <Separator />

          {tasks.map((task, index) => (
            <div
              key={index}
              className='bg-gray-100 border text-gray-500 border-gray-400 rounded-lg p-4 flex items-center justify-between'
            >
              <p className=''>{task}</p>
              <button onClick={() => removeTask(index)}>
                <Trash className='size-4 text-gray-500 active:text-danger' />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <EmptyTasksNotice />
      )}
    </>
  );
}
