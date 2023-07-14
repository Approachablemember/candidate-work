import React from 'react';
import v from "./NewUserInfoHeader.module.css"

const NewUserInfoHeader = (props) => {
    return (
        <div className={v.header}>
            <p className={v.title}>{props.title}</p>
        </div>
    );
};

export default NewUserInfoHeader;