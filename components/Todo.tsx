import React from 'react';

interface TodoProps {
    text: string;
    completed: boolean;
    onToggle: () => void;
    onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ text, completed, onToggle, onDelete }) => {
    return (
        <div>
            <input type="checkbox" checked={completed} onChange={onToggle} />
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Todo;
