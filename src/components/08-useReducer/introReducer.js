import React from 'react'

export const introReducer = () => {

    const initialState = [{
        id: 1,
        todo: 'Comer variado',
        done: false
    }];

    // const myFirstReducer = (state = initialState, action) => {
    //     return state;
    // };

    const todoReducer = (state = initialState, action) => {
        //Poner el ? para indicarle a react que si 
        //action tiene algún valor, lea la propiedad type
        if (action?.type === 'add') {
            return [...state, action.payload];
        }
        return state;
    };

    let todos = todoReducer();

    const newTodo = {
        id: 2,
        todo: 'Dormir 8h',
        done: false
    }

    const addAction = {
        type: 'add',
        //estandar llamarlo payload. 
        //También se puede mandar el objeto directamente
        payload: newTodo
    }

    todos = todoReducer(todos, addAction);

    console.log(todos);

    return (
        <div>
            <h1>Intro to useReducer</h1>
        </div>
    )
}
