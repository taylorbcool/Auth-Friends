import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = () => {

    return (
        <form onSubmit={e => {
                e.preventDefault();
                handleSubmit(inputValues);
            }}>
            <label>
                Name:
                <input
                    type='text'
                    value={inputValues.name}
                    onChange={handleName}
                />
            </label>
            <label>
                Age:
                <input
                    type='number'
                    value={inputValues.age}
                    onChange={handleAge}
                />
            </label>
            <label>
                Email:
                <input
                    type='email'
                    value={inputValues.height}
                    onChange={handleHeight}
                />
            </label>
            <button type='submit'>Add Friend</button>
            {props.isPosting && 
            <>
                <p>Adding Friend...</p>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </>
            }
        </form>
    );
};


const mapStateToProps = state => {
    return {
        inputValues: state.inputValues,
        isPosting: state.isPosting
    }
}

export default connect(
    mapStateToProps,
    { handleName, handleAge, handleHeight, handleSubmit, getFriends }
)(FriendForm)