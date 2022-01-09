import React from 'react';

const CountryDetail = ({country}) => {

    let lang = undefined
    if (country.languages) {
        // Grabs all the keys of an object and creates an array of them
        // Then we call the object and pass in the key from the top - [lang[0]]
        lang = Object.keys(country.languages);
        // console.log(country.languages[lang[0]]);
    };

    return (
        <div>
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <p>Population: {country.population}</p>
            <p>Continent: {country.continents[0]}</p>
            { lang ? <p>Language: {country.languages[lang[0]]}</p> : null}
            <p>Flag: {country.flag}</p>
        </div>
    );
};

export default CountryDetail;