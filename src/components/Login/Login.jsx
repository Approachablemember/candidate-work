import React from 'react';
import {NavLink} from "react-router-dom";
import v from "./Login.module.css"
import Header from "../Header/Header";
import Input from "../Input/Input";

const Login = () => {

    return (
        <div>
            <div className={v.headerAnimation}>
                <Header title={"Anmeldung"}/>
            </div>
            <div className={v.container}>
                <div className={v.wrapper}>
                    <form className={v.formWrapper} name={"login"}>
                        <Input type={"email"}/>
                        <Input type={"password"}/>
                        <a className={v.forgotPass} href={"https//:example.com"}>Passwort vergessen?</a>
                        <button className={v.submitBtn} type={"submit"}>Anmelden</button>
                    </form>
                    <p className={v.text}>Ich habe doch noch keinen Account</p>
                    <NavLink className={v.registrationLink} to={"/registration"}>Neu registrieren</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;