import { useState } from 'react';
import './TodoList.css';
import TodoTable from './TodoTable';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const TodoList = () => {
  const [todo, setTodo] = useState({date: '', description: ''});
  const [todos, setTodos] = useState([]);
  const [dateValue, setDateValue] = useState(dayjs());

  const inputChanged = event => {
    setTodo({...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ date: '', description: '' });
  }

  const deleteTodo = index => {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  const handleDate = (newValue) => {
  setTodo({...todo, date: newValue.format('DD.MM.YYYY')});
    setDateValue(newValue); 
  console.log(newValue); 
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <fieldset>
          <legend>Add todo:</legend>
          <DatePicker value={dateValue} onChange={handleDate} />
          <label>Description:
            <input type="text" name="description" onChange={inputChanged} value={todo.description} />
          </label>
          <input type="submit" value="Add" />
        </fieldset>
      </form>

    <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodoList;