function reducerFunc(state, action) {
  // console.log(state, action.payload,action.type);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: '',
        todos: [...state.todos, action.payload],
      };

    case 'UPDATE_TODO':
      // console.log(action.payload);
      return {
        ...state,
        todo: action.payload,
      };

    case 'DELETE_TODO':

      return {
        ...state,
        todos: state.todos.filter((todo, index) => {
          if (index !== action.payload) {
            return todo;
          }
        }),
      };
  }
}

export default reducerFunc;
