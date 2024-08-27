import React from "react";
import ModelTodo from "./models/Todo";
import Todo from './Todo'

const Todos: React.FC<{items: ModelTodo[]}> = (props) => {
    return <ul>
      {props.items.map(item => <Todo id={item.id} item={item.text} /> )}
    </ul>
}

export default Todos;