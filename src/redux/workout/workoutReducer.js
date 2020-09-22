import { WORKOUT_ACTION } from './workoutTypes';


const initialState = {
    exercises: []
};

const workoutReducer = (state = initialState, action) => {
    switch(action.type) {
        case WORKOUT_ACTION:
            return {...state, exercises: state.exercises.concat(action.payload)};
        default:
            return state;
    }
}

export default workoutReducer;

//I think something is wrong with this reducer. I am confident that we're dispatching the action correctly and with the correct payload. For some reason, this is not adding that action to the state. Weird.

//Consider: creating a new reducer that only stores the 