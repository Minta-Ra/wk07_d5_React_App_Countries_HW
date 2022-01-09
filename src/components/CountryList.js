import React, {useState} from 'react';
import CountryDetail from './CountryDetail';
import ListItem from './ListItem';


const CountryList = ({countries}) => {

    const [selectedCountry, setSelectedCountry] = useState(null);


    const onCountryClick = (country) => {
        setSelectedCountry(country)
    };

    // Sorting alphabetically list of countries
    let sortedCounries = countries.sort((a, b) => a.name.common > b.name.common ? 1 : -1);

    const countryItems = sortedCounries.map((country, index) => {

        return (
            <div key={index}>
                <ListItem country={country} key={index} onCountryClick={onCountryClick}/>
                {selectedCountry && country.name.common === selectedCountry.name.common ? <CountryDetail country={selectedCountry}/> : null}
            </div>
        );

    });



    return (
        <div>
            <ul>
                {countryItems}
            </ul>
        </div>
    );
};

export default CountryList;
