import React from "react";
import "../App.css";
import AlertControl from "./AlertControl";
import TextControl from "./TextControl";
import { NavLink } from 'react-router-dom';


const ButtonsControl = () => {
    return (
        <>
            <TextControl />
            <AlertControl />
            <NavLink to={ `/autocomplete` } className="floating-button link-button">
                След. стр
            </NavLink>
        </>
    )
}

export default ButtonsControl;