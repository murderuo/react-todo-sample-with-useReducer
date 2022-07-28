import { useReducer } from 'react';
import reducerFunc from '../Reducers/ReducerFunc';

function Todos() {
  const initalState = {
    todos: [],
    todo: '',
  };

  const [state, dispatch] = useReducer(reducerFunc, initalState);

  const handleChange = e =>
    dispatch({ type: 'UPDATE_TODO', payload: e.target.value });
  // console.log(state.todo);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: state.todo });
  };

  const handleDelete = index => {
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  return (
    <>
      Todos Components
      <hr />
    
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={state?.todo} />
        <button>Add Todo to List</button>
        <ul>
          {state?.todos?.map((todo, index) => (
            <div key={index}>
              <li>
                {todo}  ------> 
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            </div>
          ))}
          {JSON.stringify(state.todos)}
        </ul>
      </form>
    </>
  );
}

export default Todos;
