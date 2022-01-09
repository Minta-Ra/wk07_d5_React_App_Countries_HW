import React, {useEffect, useState} from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';

const CountryContainer = ({links}) => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

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

    const onSongClick = (country) => {
        setSelectedCountry(country)
    };

    return (
        <>
            <h2>CountryContainer</h2>
            <CountryDetail country={selectedCountry}/>
            <CountryList countries={countries} onSongClick={onSongClick}/>
        </>
    );
};

export default CountryContainer;