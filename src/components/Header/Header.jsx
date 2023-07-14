import React from 'react';
import v from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={v.header}>
            <img src={"./icon_logo_signet.svg"} alt={"Header logo"}/>
            <p className={v.title}>{props.title}</p>
        </div>
    );
};

export default Header;