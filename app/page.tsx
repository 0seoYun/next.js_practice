"use client"
import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import { Todo } from '../app/types';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = Date.now(); // id 생성
      setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const startEditing = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditingId(id);
      setEditingText(todoToEdit.text);
    }
  };

  const finishEditing = () => {
    if (editingText.trim() !== '') {
      const newTodos = todos.map((todo) =>
        todo.id === editingId ? { ...todo, text: editingText } : todo
      );
      setTodos(newTodos);
      setEditingId(null);
      setEditingText('');
    }
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        startEditing={startEditing}
        deleteTodo={deleteTodo}
        editingId={editingId}
        editingText={editingText}
        setEditingText={setEditingText}
        finishEditing={finishEditing}
      />
    </div>
  );
}
