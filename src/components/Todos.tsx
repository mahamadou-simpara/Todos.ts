import React from "react";
import ModelTodo from "./models/Todo";
import Todo from './Todo'

const Todos: React.FC<{items: ModelTodo[], onRemove: (id: string) => void}> = (props) => {
    return <ul>
      {props.items.map(item => <Todo onRemove={props.onRemove} key={item.id} id={item.id} item={item.text} /> )}
    </ul>
}

export default Todos;