import React from 'react'

function TodoItem(props){

    return (
        <div className='todo-item'>
        <input onChange={() => props.handleChange(props.item.id)} checked={props.item.checked} type="checkbox"></input>
        <p> {props.item.text} </p>
        </div>    
    )
}



export default TodoItem 