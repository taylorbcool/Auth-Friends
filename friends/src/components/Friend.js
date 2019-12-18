import React from 'react'

const Friend = props => {
    return(
        <div className='friend'>
            <h2>{props.friend.name}</h2>
            <h4>Age: {props.friend.age}</h4>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export default Friend