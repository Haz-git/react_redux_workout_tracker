import React from 'react';
import { connect } from 'react-redux';

const FormList = ({exercises}) => {

    const renderList = () => {
        return (
            <div>
                {exercises.map(e => {
                    return (
                        <div className='ui large label'>
                            <h2>{e.name} - {e.rep} </h2> 
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className='ui container'>
            <h2>Your Exercises Performed: </h2>
            {renderList()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        exercises: state.exercises,
    }
}

export default connect(mapStateToProps)(FormList);