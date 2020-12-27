import React, { useEffect, useState } from 'react';

import { getAllItems } from '../../service/items';

import ItemsList from './ItemsList';

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
        return <div>Loading...</div>
    }

    return (
        <div className="items-container container">
            <h2>OSRS Items:</h2>
            <ItemsList items={ state.items } />
        </div>
    );
};

export default ItemDashBoard;