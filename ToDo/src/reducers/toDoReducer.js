import * as toDoActions from '../actions/toDoActions'

const initialState = {
    testReducer: 0
};


const toDoReducer = (state = initialState, action) => {

    switch (action.type) {
        case toDoActions.ADD_TODO:
            alert("ci sono")
        default: {
            return state;
        }
    }
}



    export default toDoReducer