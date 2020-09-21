import { WORKOUT_ACTION } from './workoutTypes';

const submitWorkout = (exercise, num) => {
    return {
        type: WORKOUT_ACTION,
        payload: {
            exercise: exercise,
            num: num
        }
    }
}

export default submitWorkout;