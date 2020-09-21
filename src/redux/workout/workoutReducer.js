import { WORKOUT_ACTION } from './workoutTypes';


const initialState = {
    exercise: {
        name: '',
        reps: 0
    }
};

const workoutReducer = (state = initialState, action) => {
    switch(action.type) {
        case WORKOUT_ACTION:
            return {
                ...initialState, 
                exercise: {
                    name: action.payload.exercise,
                    reps: action.payload.num
                }
            }

        default:
            return state;
    }
}

export default workoutReducer;