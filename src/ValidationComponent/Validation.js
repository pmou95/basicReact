import React from 'react';

const validation = (props) => {
    return (
    <div>
        <p> Text length : {props.length}</p>
    {
        props.length <5?
        <p> Text too short</p>:
        <p>Text ok </p>
    }

    </div>
)}

export default validation;