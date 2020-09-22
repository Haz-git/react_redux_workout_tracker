import { WORKOUT_ACTION } from './workoutTypes';


export const submitWorkout = (name, rep) => {
    return {
        type: WORKOUT_ACTION,
        payload: {
            name: name,
            rep: rep
        }
    }
}

export default submitWorkout;