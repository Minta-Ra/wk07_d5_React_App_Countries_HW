import React from 'react';
import ListItem from './ListItem';


const CountryList = ({countries, onSongClick}) => {

    // console.log("I am country", countries.country);
    const countryItems = countries.map((country, index) => {

        return <ListItem country={country} key={index} onSongClick={onSongClick}/>
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
