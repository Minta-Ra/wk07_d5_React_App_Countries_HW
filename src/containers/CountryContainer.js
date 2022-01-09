import React, {useEffect, useState} from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';

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
            <h1>All countries in the world</h1>
            <p>Click on the country name to see details</p>
            <CountryList countries={countries}/>
        </>
    );
};

export default CountryContainer;