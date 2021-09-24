import React, {useEffect, useState} from 'react';
import TForm from "../components/TForm";
import TList from "../components/TList";
import {ITodo} from "../interfaces";

declare var confirm: (approve: string) => boolean

const TPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo:ITodo = {
            id: Date.now(),
            title: title,
            completed: false,
        }
        setTodos(prev => [newTodo, ...prev])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) return {
                ...todo,
                completed: !todo.completed
            }
            return todo
        }))
    }

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Are you sure?')
        if (shouldRemove) setTodos(prev => prev.filter(todo => todo.id !== id))
    }
    return <>
        <TForm onAdd={addHandler} />
        <TList
            todos={todos}
            onRemove={removeHandler}
            onToggle={toggleHandler}
        />
    </>
};

export default TPage
