import React from 'react';
import v from "./IAmInfo.module.css";

const IAmInfo = (props) => {

    const showInfoWindowCallback = () => {
      props.showInfoWindow(false)
    }

    return (
        <div className={props.showInfo? v.infoWindow : v.infoWindowHidden}>
            <div className={v.closeBtnWrapper}>
                <img className={v.closeBtn} onClick={showInfoWindowCallback} src={"./icon-close.svg"} alt={""}/>
            </div>
            <div className={v.infoTitle}>
                <p className={v.infoIconBig}>i</p>
                <p className={v.infoTextBig}>Ich bin</p>
            </div>
            <p className={v.longText}>
                Diese Angabe benötigen wir, um für dich <br/>
                relevante Inhalte anzeigen zu können. Lorem <br/>
                ipsum dolor sit amet, consetetur sadipscing <br/>
                elitr, sed diam nonumy eirmod tempor <br/>
                invidunt ut labore et dolore magna aliquyam <br/>
                erat, sed diam voluptua. At vero eos et <br/>
                accusam et justo duo dolores et ea rebum. <br/>
                Stet clita kasd gubergren, no sea takimata <br/>
                sanctus est Lorem ipsum dolor sit amet.
            </p>
        </div>
    );
};

export default IAmInfo;