import React, {useEffect, useState} from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = ({links}) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries(links[0].url)
    },[]);

    const loadCountries = (url) => {
        fetch(url)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(allCountries => setCountries(allCountries)) //.name.common
        .catch(error => console.error);
    };

    return (
        <>
            <h2>CountryContainer</h2>
            <CountryList countries={countries}/>
        </>
    );
};

export default CountryContainer;