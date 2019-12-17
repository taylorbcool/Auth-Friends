import React from 'react'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { handleName, handleAge, handleEmail, handleSubmit, getFriends } from '../actions/friendActions';

const FriendForm = props => {

    return (
        <form>
            <label>
                Name:
                <input
                    type='text'
                    value={props.inputValues.name}
                    onChange={props.handleName}
                />
            </label>
            <label>
                Age:
                <input
                    type='number'
                    value={props.inputValues.age}
                    onChange={props.handleAge}
                />
            </label>
            <label>
                Email:
                <input
                    type='email'
                    value={props.inputValues.email}
                    onChange={props.handleEmail}
                />
            </label>
            <button onClick={e => {
                e.preventDefault();
                props.handleSubmit(props.inputValues);
            }}>Add Friend</button>
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
    { handleName, handleAge, handleEmail, handleSubmit, getFriends }
)(FriendForm)