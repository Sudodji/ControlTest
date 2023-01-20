import React, {useState, useEffect} from "react";
import "../App.css";
import { NavLink } from 'react-router-dom';
import autoComplete from "../store/autoComplete";
import { observer } from "mobx-react-lite";
import useDebounce from "../hooks/useDebounce";;

type TProps = {
    limit: number;
}

const AutoCompleteControl: React.FC<TProps> = observer(({limit}) => {
    const [country, setCountry] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const debouncedSearchCountries = useDebounce(country, 2000);
    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCountry(event.target.value);
        setIsOpen(true);
    }
    const handleClickSuggestedCountry = (name:string): void => {
        setCountry(name);
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (debouncedSearchCountries) {
            autoComplete.getCountries(country, limit);
        }
    }, [debouncedSearchCountries])
    return (
        <>
            <div className="search-field">
                <input className="text-field__input search__input" 
                    type="text" 
                    name="textControl" 
                    placeholder="Найти страну" 
                    value={country}
                    onChange={handleOnChangeInput} 
                />
                {isOpen && country && autoComplete.countries.length > 0 &&
                    <div className="country-list">
                        {autoComplete.countries.map(country => (
                            <p className="country-item" key={country.name + country.fullName} onClick={() => handleClickSuggestedCountry(country.name)}>{country.name}, {country.fullName} <img width="55px" height="35px" src={country.flag} alt="flag"/></p>
                        ))}
                    </div>
                }
            </div>
            <NavLink to={ `/` } className="floating-button link-button">
                Пред. стр
            </NavLink>
        </>
    )
})

export default AutoCompleteControl;