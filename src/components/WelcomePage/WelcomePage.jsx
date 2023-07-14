import React from 'react';
import {NavLink} from "react-router-dom";
import v from "./WelcomePage.module.css"

const WelcomePage = () => {
    return (
        <div className={v.container}>
            <div className={v.wrapper}>
                <img src={"./icon_logo_signet.svg"} alt={""}/>
                <div className={v.textWrapper}>
                    <h1 className={v.title}>Herzlich willkommen <br/> bei Lern-Fair</h1>
                    <p className={v.text}>
                        Hast du breits einen Account?
                        Oder bist du <br/> neu bei uns und möchtest dich registrieren?
                    </p>
                </div>
                <div className={v.btnContainer}>
                        <NavLink className={v.loginLink} to={"/login"}>
                            <button className={v.loginBtn}>Anmelden</button>
                        </NavLink>
                        <NavLink className={v.registrationLink} to={"/registration"}>
                            <button className={v.registrationBtn}>Neu registrieren</button>
                        </NavLink>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;