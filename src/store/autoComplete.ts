import { makeAutoObservable } from "mobx";
import { getCountryByName } from "../api/apiService";
import { CountryInfo } from "../api/apiService";

class AutoComplete {
    countries: CountryInfo[] = [];
    constructor() {
        makeAutoObservable(this)
    }
    getCountries (countryName: string, limit: number) : void {
        getCountryByName(countryName, limit).then((data) => this.countries = data)
    }
}

export default new AutoComplete();