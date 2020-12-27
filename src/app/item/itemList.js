import React from 'react';
import PropTypes from 'prop-types';

const ItemList = (props) => {
    return (
        <div className="item-list">
            { props.items.map((item, index) => <div key={ index }>{ item.name }</div>) }
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemList;