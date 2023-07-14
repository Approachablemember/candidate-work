import React, {useState} from 'react';
import v from "./Input.module.css";

const Input = (props) => {

    const [showPass, setShowPass] = useState(false)

    const emailInput = <input className={v.input} type={"email"} id={"email"} placeholder={"E-Mail"}/>

    const passwordInput = <div className={v.passInput} >
        <input className={v.input} type={showPass? "text" : "password"} id={"password"} placeholder={"Passwort"}/>
        <img className={v.showPassIcon} onClick={() => setShowPass(!showPass)} src={"./seePass.svg"} alt={""}/>
    </div>

    const passwordRepeatInput = <div className={v.passInput} >
        <input className={v.input} type={showPass? "text" : "password"} id={"password-repeat"} placeholder={"Passwort wiederholen"}/>
        <img className={v.showPassIcon} onClick={() => setShowPass(!showPass)} src={"./seePass.svg"} alt={""}/>
    </div>

    return (
        props.type === 'email'? emailInput :
            props.type === 'password'? passwordInput : passwordRepeatInput
    );
};

export default Input;