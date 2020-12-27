import React from 'react';
import PropTypes from 'prop-types';

const ItemsList = (props) => {
    return (
        <div className="item-list">
            { props.items.map((item, index) => <div key={ index }>{item.name}</div>)}
        </div>
    );
};

ItemsList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemsList;