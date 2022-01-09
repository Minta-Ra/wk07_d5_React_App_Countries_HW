import React from 'react';

const ListItem = ({country}) => {

    return (
        <>
            <li>
                {country.name.common}
            </li>
        </>
    );
};

// Ternery if clicked render it

export default ListItem;