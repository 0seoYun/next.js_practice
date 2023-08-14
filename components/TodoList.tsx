'use client'
import React, { useState } from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState<string>('');

    const addTodo = (text: string) => {
        const newTodo: TodoItem = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const startEditing = (id: number, text: string) => {
        setEditingId(id);
        setEditingText(text);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditingText('');
    };

    const saveEditing = (id: number) => {
        if (editingText.trim() === '') {
            return;
        }

        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: editingText } : todo
            )
        );

        setEditingId(null);
        setEditingText('');
    };


    return (
        <div>
            <TodoInput onAddTodo={addTodo} />
            {todos.map((todo) => (
                <div key={todo.id}>
                    {editingId === todo.id ? (
                        <>
                            <input
                                type="text"
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                            />
                            <button onClick={() => saveEditing(todo.id)}>Save</button>
                            <button onClick={cancelEditing}>Cancel</button>
                        </>
                    ) : (
                        <Todo
                            text={todo.text}
                            completed={todo.completed}
                            onToggle={() => toggleTodo(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                        >
                            <button onClick={() => startEditing(todo.id, todo.text)}>
                                Edit
                            </button>
                        </Todo>
                    )}
                </div>
            ))}
        </div>
    );
};


export default TodoList;