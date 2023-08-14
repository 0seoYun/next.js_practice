'use client'
import React, { useState } from 'react';

interface TodoInputProps {
    onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            onAddTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div>
            <input type="text" value={newTodo} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default TodoInput;
