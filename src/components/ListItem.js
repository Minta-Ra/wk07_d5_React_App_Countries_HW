import React from 'react';

const ListItem = ({country, onSongClick}) => {

    const handleClick = () => {
        onSongClick(country)
    };

    return (
        <>
            <li onClick={handleClick}>
                {country.name.common}
            </li>
        </>
    );
};

// Ternery if clicked render it

export default ListItem;