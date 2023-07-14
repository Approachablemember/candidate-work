import React, {useEffect} from 'react';
import NewUserInfoHeader from "../NewUserInfoHeader/NewUserInfoHeader";
import v from "./Important.module.css"
import {NavLink} from "react-router-dom";


const Important = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className={v.headerAnimation}>
                <NewUserInfoHeader title={"Wichtig"}/>
            </div>
            <div className={v.container}>
                <div className={v.textWrapper}>
                    <p>
                        Unsere Angebote richten sich an bildungsbenachtiligte Schüler:innen. Du weißt nicht genau ob die
                        zu
                        dieser Zielgruppe gehörst?
                    </p>
                    <p>
                        Dann schaue dir die nachfolgenden Punkte an.
                        Kannst du zwei oder mehr von ihnen mit "ja" beantworten?
                        Dann darfst du gerne alle Angebote von Lern-Fair nutzen.
                    </p>
                    <ul style={{marginLeft: "15px"}}>
                        <li>Du brauchst Hilfe in der Schule?</li>
                        <li>Deine Familie kann dir nicht bei deinen Hausaufgaben helfen?</li>
                        <li>Deine Familie kann keine Nachhilfe für dich bezahlen?</li>
                    </ul>
                </div>
                <div className={v.btnWrapper}>
                    <NavLink className={v.btnLink} to={"/email-confirmation"}>
                        <button className={v.btn}>Ja. die Punkte treffen zu</button>
                    </NavLink>
                    <NavLink className={v.btnLink} to={"/"}>
                        <button className={v.btn}>Nein, die Punkte treffen nicht zu</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Important;