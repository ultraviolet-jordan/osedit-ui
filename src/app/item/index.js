import React, { useEffect, useState } from 'react';

import { getAllItems } from '../../service/item';

import ItemList from './itemList';

const ItemDashBoard = () => {
    const [state, setState] = useState({
        isLoaded: false,
        items: []
    });

    useEffect(() => {
        getAllItems().then((data) => {
            setState({ isLoaded: true, items: data })
        });
    }, []);

    if (!state.isLoaded) {
        return <div>Loading items...</div>
    }

    return (
        <div className="items-container container">
            <h2>OSRS Items:</h2>
            <ItemList items={ state.items } />
        </div>
    );
};

export default ItemDashBoard;