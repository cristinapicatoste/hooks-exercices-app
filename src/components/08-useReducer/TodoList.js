import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ol>
            {
                todos.map(todo => (
                    <div key={todo.id} className="list-options">
                        <TodoListItem todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} />
                    </div>

                ))
            }
        </ol>
    )
}
