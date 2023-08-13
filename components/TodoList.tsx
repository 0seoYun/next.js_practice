import { Todo } from '../app/types';
import TodoItem from './TodoItem';
import React from 'react';


interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    startEditing: (id: number) => void;
    deleteTodo: (id: number) => void;
    editingId: number | null;
    editingText: string;
    setEditingText: React.Dispatch<React.SetStateAction<string>>;
    finishEditing: () => void;
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleTodo,
    startEditing,
    deleteTodo,
    editingId,
    editingText,
    setEditingText,
    finishEditing,
}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    startEditing={startEditing}
                    deleteTodo={deleteTodo}
                    editingId={editingId}
                    editingText={editingText}
                    setEditingText={setEditingText}
                    finishEditing={finishEditing}
                />
            ))}
        </ul>
    );
};

export default TodoList;
