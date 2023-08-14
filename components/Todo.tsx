import React from 'react';
import './styles.css';

interface TodoProps {
    text: string;
    completed: boolean;
    onToggle: () => void;
    onDelete: () => void;
    children: React.ReactNode; // Edit 버튼을 위해 children 추가
}


const Todo: React.FC<TodoProps> = ({ text, completed, onToggle, onDelete, children }) => {
    return (
        <div className="todo">
            <input type="checkbox" checked={completed} onChange={onToggle} />
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
            {children} {/* Edit 버튼 여기 */}
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Todo;
