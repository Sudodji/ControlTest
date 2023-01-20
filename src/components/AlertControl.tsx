import React, {useState} from "react";
import "../App.css";

const AlertControl = () => {
    const [ value, setValue ] = useState('');
    const handleClickIsNumber = (value: string): void => {
        if (!Number.isNaN(Number(value))) alert(value);
    }
    return (
        <div className="text-field">
            <button className="floating-button" onClick={() => handleClickIsNumber(value)}>Проверка на число</button>
            <input 
                className="text-field__input" 
                type="text" 
                name="textControl" 
                placeholder="Введите что-нибудь..." 
                value={value}
                onChange={ event => { setValue(event.target.value) } } 
            />
            <button className="floating-button" onClick={() => alert(value)}>Вызвать alert</button>
        </div>
    )
}

export default AlertControl;