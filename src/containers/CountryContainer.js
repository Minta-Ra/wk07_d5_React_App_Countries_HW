import React, {useEffect, useState} from 'react';

const CountryContainer = ({links}) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries(links[0].url)
    },[]);

    const loadCountries = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(countriesList => setCountries(countriesList[0])) //.name.common
        .catch(error => console.error);
    };



    return (
        <h2>CountryContainer</h2>
    );
};

export default CountryContainer;