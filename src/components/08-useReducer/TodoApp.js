import React, { useReducer, useEffect, useRef } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hook/useForm';
// import DeleteIcon from '@material-ui/icons/Delete';
// import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
// import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { TodoList } from './TodoList';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    //Usamos el useRef para seleccionar el input tras hacer submit y seguir escribiendo;
    const ref = useRef(null);

    const handleSubmit = (e) => {
        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        // create action
        const addTodoAction = {
            type: 'add',
            payload: newTodo
        };

        // dispatch to add 
        dispatch(addTodoAction);

        reset();

        //Deja el input seleccionado tras enviar el contenido
        //y asú seguir escribiendo
        ref.current.focus();
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    const handleDelete = (todoId) => {
        // create action
        const deleteToDo = {
            type: 'delete',
            payload: todoId,
        }
        // dispatch to delete
        dispatch(deleteToDo)
    }

    const handleToggle = (todoId) => {
        const toggle = {
            type: 'toggle',
            payload: todoId
        }

        dispatch(toggle)
    }

    // console.log(todo.done);

    return (
        <div>
            <h1>Todo App</h1>
            <h4>Total todos: {todos.length}</h4>
            <div className="add-list-options">
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp}
                    ref={ref}
                    placeholder="Add new to do"
                    autoComplete="off"
                />
                <AddCircleIcon
                    fontSize="large"
                    style={{ color: "white" }}
                    onClick={handleSubmit}
                />
            </div>

            <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />

            {/* 
            <ol>
                {
                    todos.map(todo => (
                        <div key={todo.id} className="list-options">
                            <li
                                key={todo.id}
                                onClick={() => handleToggle(todo.id)}
                                className={`${todo.done && 'complete'}`}
                            >
                                {todo.desc}
                            </li>

                            <div key="icons-div" className="icons-options">
                                <DeleteOutlineOutlinedIcon
                                    fontSize="small"
                                    style={{ color: "white" }}
                                    onClick={() => handleDelete(todo.id)}
                                />
                                <EditIcon fontSize="small" style={{ color: "white" }} />
                            </div>
                        </div>
                    ))
                }
            </ol>
*/}
        </div>
    )
}
