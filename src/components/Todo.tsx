import React from "react";

const Todo:React.FC<{id: string, item: string}> = ({id, item}) => {
    return <li key={id}>{item}</li>
}

export default Todo;