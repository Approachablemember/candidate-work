import React from 'react';
import v from "./EmailConfirmation.module.css"

const EmailConfirmation = () => {

    // const textBeforeConfirming = <p>
    //     gesented. Bevor du unser Angebot nutzen <br/>
    //     kansst, musst du deine E-Mailadresse <br/>
    //     bestätigen und den AGBs zustimmen. Wenn <br/>
    //     du deine E-Mailadresse bestätigt hast, wirst <br/>
    //     du automatisch weitergeleitet
    // </p>

    const textAfterConfirming = <p className={v.text}>
        gesented. Bevor du unser Angebot nutzen <br/>
        kansst, musst du deine E-Mailadresse <br/>
        bestätigen und den AGBs zustimmen
    </p>

    // const dontHaveEmail = <div>
    //     <h2>Keine E-Mail erhalten?</h2>
    //     <a>Erneut senden</a>
    // </div>

    const emailConfirmed = <div className={v.sendAgainLinks}>
        <h3 className={v.sendAgainTitle}>Keine E-Mail erhalten?</h3>
        <a className={v.sendAgainLink} href={"https//:example.com"}>Erneut senden</a>
        <a className={v.sendAgainLink} href={"https//:example.com"}>E-Mailadresse ändern</a>
    </div>

    return (
        <div>
            <div className={v.container}>
                <div className={v.planeBackground}>
                    <img className={v.planeIcon}
                         src={"./paper-plane-2563.svg"}
                         alt={"Plane logo"}/>
                </div>
                <h2 className={v.title}>Fast geschafft!</h2>
                <p className={v.text}>Wir haben eine E-Mail an</p>
                <a href={"https//:example.com"} className={v.email}>email.example@example.com</a>
                {textAfterConfirming}
                {emailConfirmed}
                <button className={v.btn}>Weiter</button>
            </div>
        </div>
    );
};

export default EmailConfirmation;