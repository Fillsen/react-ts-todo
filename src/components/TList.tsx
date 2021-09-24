import React from 'react';
import {ITodo} from "../interfaces";

type TListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

const TList:React.FC<TListProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) return <h5 className='center'>There a no todos</h5>

    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) classes.push('completed')
                return (
                    <li className={classes.join(' ')} key={todo.id} >
                        <label>
                            <input type='checkbox' checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
                            <span>{todo.title}</span>
                            <i
                                className='material-icons red-text'
                                onClick={e => removeHandler(e, todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    );
};

export default TList;
