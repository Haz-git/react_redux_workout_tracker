import React, { useState } from 'react';
import { connect } from 'react-redux';
import submitWorkout from '../redux/workout/workoutActions';

const Form = ({ submitWorkout }) => {

    const [ exerciseName, setExerciseName ] = useState('');
    const [ exerciseRep, setExerciseRep ] = useState('');


    let submitCounter = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        submitWorkout(exerciseName, exerciseRep);
        console.log('Submit Success', exerciseName, exerciseRep)
        setExerciseName('');
        setExerciseRep('');
    }

    const handleRepChange = (e) => {
        setExerciseRep(e.target.value);
        console.log(e.target.value);
    }

    const handleNameChange = (e) => {
        setExerciseName(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <div>
                <h1>Please enter your Workout and # of Reps</h1>
            </div>
            <form onSubmit={handleSubmit} className='ui form'>
                <div className='field'>
                    <label>Exercise Name</label>
                    <input value={exerciseName} onChange={handleNameChange} type='text'></input>
                </div>
                <div className='field'>
                    <label>Rep Count</label>
                    <input value={exerciseRep} onChange={handleRepChange} type='number'></input>
                </div>
                <button type='submit' className='ui button primary'>Submit</button>
                <button type='reset' className='ui button negative'>Reset</button>
            </form>
        </div>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         submitWorkout: () => dispatch(submitWorkout())
//     }
// }


export default connect(null, { submitWorkout })(Form);