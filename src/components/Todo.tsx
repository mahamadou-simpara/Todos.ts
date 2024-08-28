import React from "react";

const Todo:React.FC<{id: string, item: string, onRemove: (id: string) => void}> = ({ id, item, onRemove}) => {

    const handleClick = () => {

        onRemove(id)
        
    }

    return <li onClick={handleClick}>{item}</li>
}

export default Todo;