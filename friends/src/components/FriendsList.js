import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import Friend from './Friend'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const FriendList = props => {

    useEffect(() => {
        props.getFriends()
      }, []);

    return (
        <div className='flex'>
            {props.isFetching && (
                <>
                <h1>Fetching friends...</h1>
                <br />
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
                </>
            )}
            {props.friendData && 
                props.friendData.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))
            }
            <Link to='/add-friend'>Add a Friend</Link>
        </div>
  );
};

const mapStateToProps = state => {
  return {
        friendData: state.friendData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
  mapStateToProps,
  {}
)(FriendList);