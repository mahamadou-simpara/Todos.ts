import React, { useRef } from "react";

const NewTodo:React.FC<{ onAddTodo: (text: string) => void }> = ({onAddTodo}) => {

    const todoInputElement = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoInputElement.current!.value;

        if(enteredText.trim().length <= 0) {
            return;
        }

        onAddTodo(enteredText);

        todoInputElement.current!.value = ''
    };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Todos List</label>
        <input type="text" ref={todoInputElement} />
        <button>Add New Todo</button>
      </form>
    </div>
  );
};



export default NewTodo;