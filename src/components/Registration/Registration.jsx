import React, {useEffect, useState} from 'react';
import v from "./Registration.module.css";
import {NavLink} from "react-router-dom";
import Header from "../Header/Header";
import IAmInfo from "../IAmInfo/IAmInfo";
import Input from "../Input/Input";

const Registration = () => {

    const [chosenOption, setChosenOption] = useState('Schüler:in')
    const [showInfo, setShowWindow] = useState(false)

    const showInfoWindow = (value) => {
        setShowWindow(value)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className={v.headerAnimation}>
                <Header title={"Neu registrieren"}/>
            </div>
            <div className={v.container}>
                <form className={v.formWrapper} name={"registration"}>
                    <Input type={"email"}/>
                    <Input type={"password"}/>
                    <Input type={"password-repeat"}/>
                    <div className={v.info}>
                        <p className={v.infoText}>Ich bin</p>
                        <p className={v.infoIcon}
                           onClick={() => showInfoWindow(true)}
                        >i</p>
                    </div>

                    <IAmInfo showInfoWindow={showInfoWindow} showInfo={showInfo}/>

                    <div className={v.chooseOption}>
                        <div className={chosenOption === 'Elternteil' ? v.optionChosen : v.optionNotChosen}
                             onClick={() => setChosenOption("Elternteil")}>
                            <img src={"./owl1.svg"} alt={""}/><p>Elternteil</p>
                        </div>
                        <div className={chosenOption === 'Schüler:in' ? v.optionChosen : v.optionNotChosen}
                             onClick={() => setChosenOption("Schüler:in")}>
                            <img src={"./owl2.svg"} alt={""}/><p>Schüler:in</p>
                        </div>
                        <div className={chosenOption === 'Helfer:in' ? v.optionChosen : v.optionNotChosen}
                             onClick={() => setChosenOption("Helfer:in")}
                        >
                            <img src={"./owl3.svg"} alt={""}/><p>Helfer:in</p>
                        </div>
                    </div>
                    <div className={v.checkboxRules}>
                        <input type={"checkbox"}/>
                        <p>Hiermit stimme ich den <br/>
                            <a className={v.rulesLink} href={"https//:example.com"}>Nutzungsbedingungen</a> und der <br/>
                            <a className={v.rulesLink} href={"https//:example.com"}>Datenschutzerklärung</a> zu.</p>
                    </div>

                    <NavLink style={{textDecoration: "none", color: "#2B4B51"}} to={"/important"}>
                        <button className={v.submitBtn} type={"submit"}>Weiter</button>
                    </NavLink>

                </form>
                <div className={v.linkLoginWrapper}>
                    <p>Ich habe doch schon einen Account:</p>
                    <NavLink className={v.linkLogin} to={"/login"}>Jetzt anmelden</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Registration;