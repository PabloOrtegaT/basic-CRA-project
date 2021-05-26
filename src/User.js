import React from 'react';

function User(props){
    return (
        <React.Fragment>
            <div>Name: {props.name}</div>
            <div>Description: {props.description}</div>
            <div>Age: {props.age}</div>
            <div>{props.avatar}</div>
        </React.Fragment>
    );
}

export default User;