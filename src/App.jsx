import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import v from "./App.module.css"
import Important from "./components/Important/Important";
import EmailConfirmation from "./components/EmailConfirmation/EmailConfirmation";

function App() {

    return (
        <BrowserRouter>
        <div className={v.App}>
            <Routes>
                <Route path={"/"} element={<WelcomePage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/registration"} element={<Registration/>}/>
                <Route path={"/important"} element={<Important/>}/>
                <Route path={"/email-confirmation"} element={<EmailConfirmation/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
