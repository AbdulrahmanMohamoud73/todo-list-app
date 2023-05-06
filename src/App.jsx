import { useState } from 'react'
import './styles.css'

export default function App () {
 const [item, newitem] = useState('')
 const [todos, setTodos] = useState([])


function handleSubmit(e){
  e.preventDefault()

  setTodos((currentTodos) => {
    return [
      ...currentTodos, { id: crypto.randomUUID(), title: item, completed: false }
    ]
  })

  newitem("")
}

function toggleTodos(id, completed) {
  setTodos(currentTodos =>
    currentTodos.map(todo =>
      todo.id === id ? { ...todo, completed } : todo
    )
  );
}

const removeTodos = (id) => {
  setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
}


  return (
  <>
  <form onSubmit= {handleSubmit} className='new-item-form'>
  <div className='form-row'>
    <label htmlFor='item'>Add New Item</label>
    <input type='text' value = {item} onChange={e => newitem(e.target.value)} id="item"/>
  </div>
  <button className='btn'>Add</button>
</form>
<h1 className='header'>Todo List</h1>
<ul className='list'>
  {todos.map(todo => {
    return (
      <li key={todo.id}>
      <label>
        <input type='checkbox' checked= {todo.completed} onChange={e => toggleTodos(todo.id, e.target.checked)}/>
        {todo.title}
      </label>
      <button onClick= {() => removeTodos(todo.id)} className='btn btn-danger'>
        Delete
        </button>
        </li>
    )
  })}
</ul>
</>
)


  
}