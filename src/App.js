import React from 'react';
import './App.css';
import TodoItem from './components/todos';
import todosData from './todosData.js';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos : todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(id) {
    console.log("wow")
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.checked = !todo.checked
        }
        return todo
      })
      return {
         todos: updatedTodos 
      }
    })

  }

  render() {

const todosComponents = this.state.todos.map(todo => <TodoItem handleChange={this.handleChange} key={todo.id} item={todo} ></TodoItem>)

    return(
      <div className='todo-list'> 
        {todosComponents}
      </div>
    )
  }
}



export default App;
