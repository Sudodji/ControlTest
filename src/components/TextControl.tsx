import React, {useState} from "react";
import "../App.css";

const TextControl = () => {
    const [ value, setValue ] = useState('');
    return (
        <div className="text-field">
            <input className="text-field__input" 
                type="text" 
                name="textControl" 
                placeholder="Введите что-нибудь..." 
                value={value}
                onChange={ event => { setValue(event.target.value) } } 
            />
            <button className="floating-button" onClick={() => setValue('')}>Очистить ввод</button>
            <button className="floating-button" onClick={() => setValue('Hello world!')}>Занести текст</button>
        </div>
    )
}

export default TextControl;