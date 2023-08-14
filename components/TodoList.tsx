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


    return (
        <div>
            <TodoInput onAddTodo={addTodo} />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={() => toggleTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                />
            ))}
        </div>
    );
};

export default TodoList;
