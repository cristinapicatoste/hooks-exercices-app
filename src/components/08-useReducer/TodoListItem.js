import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/Edit';

export const TodoListItem = ({ todo, handleDelete, handleToggle }) => {
    return (
        <>
            {/* TODOLISTITEM: todo, index, handleDelete, handleToggle */}
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
        </>
    )
}
