import * as toDoActions from '../actions/toDoActions'
import Todo from '../components/toDo';

const initialState = {
    user: {},
    toDo: [],
    logged: false
};

const toDoReducer = (state = initialState, action) => {

    switch (action.type) {
        case toDoActions.SET_USER:
            return { ...state, logged: true, user: action.payload.user }


        case toDoActions.ADD_TODO:
            const newToDo = {
                id: 22,
                userId: state.user.id,
                title: action.payload.title,
                completed: false
            }

            return { ...state, toDo:state.toDo.concat(newToDo)}

        default: {
            return state;
        }

    }
}



export default toDoReducer