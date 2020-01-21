export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
]


export const TodoReducer = (state, action) => {
    switch (action.type){
        case 'ADD_TODO': {
            console.log("from add case", state);
            return [...state, {item: action.payload, completed: false, id: Date.now()}]
        };
        case 'MARK_COMPLETED': {
            console.log(action.payload);
            let current = state.find(todo => todo.id === Number(action.payload));
            let index = state.indexOf(current);
            console.log("index", index);
            let newState = [...state];
            newState[index].completed = !newState[index].completed;
            console.log(newState);
            return newState;
        };
        case 'CLEAR_TODOS': {
            let newState = [...state];
            let filtered = newState.filter(todo => {
                return todo.completed === false
            })
            return filtered;
        }
        default: {
            return state;
        }
    }
}