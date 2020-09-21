import { WORKOUT_ACTION } from './workoutTypes';


const initialState = {
    exercise: [{}]
};

const workoutReducer = (state = initialState, action) => {
    switch(action.type) {
        case WORKOUT_ACTION:
            return {
                ...initialState, 
                exercise: [...state.exercise,
                    {
                        name: action.payload.exercise,
                        reps: action.payload.num
                    }
                ]
            }

        default:
            return state;
    }
}

export default workoutReducer;

//I think something is wrong with this reducer. I am confident that we're dispatching the action correctly and with the correct payload. For some reason, this is not adding that action to the state. Weird.