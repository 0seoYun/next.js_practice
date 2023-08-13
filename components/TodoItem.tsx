import React from 'react';
import { Todo } from '../app/types';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
    startEditing: (id: number) => void;
    deleteTodo: (id: number) => void;
    editingId: number | null;
    editingText: string;
    setEditingText: React.Dispatch<React.SetStateAction<string>>;
    finishEditing: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    toggleTodo,
    startEditing,
    deleteTodo,
    editingId,
    editingText,
    setEditingText,
    finishEditing,
}) => {
    return (
        <li key={todo.id}>
            {editingId === todo.id ? (
                <>
                    <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                    />
                    <button onClick={finishEditing}>Done</button>
                </>
            ) : (
                <>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                    />
                    {todo.text}
                    <button onClick={() => startEditing(todo.id)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;
