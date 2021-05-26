import React from 'react';

const Hobbies = (props) => {
    return (
        <React.Fragment>
            <div>{props.showHobbies ? JSON.stringify(props.hobbies) : 'Hobbies not allowed'}</div>
            <div>Active hobbies: {count(props.hobbies)}</div>
        </React.Fragment>
    );
}

const count = (array) => {
    var length = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i].isActive){
            length++;
        }
    }
    return length;
};

export default Hobbies;