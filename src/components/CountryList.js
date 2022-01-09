import React from 'react';
import ListItem from './ListItem';


const CountryList = ({countries}) => {

    // console.log("I am country", countries.country);
    const countryItems = countries.map((country, index) => {

        return <ListItem country={country} key={index}/>
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
