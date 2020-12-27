import React from 'react';
import PropTypes from 'prop-types';

const NpcList = (props) => {
    return (
        <div className="npc-list">
            { props.npcs.map((npc, index) => <div key={ index }>{ npc.name }</div>) }
        </div>
    )
}

NpcList.proptype = {
    npcs: PropTypes.array.isRequired
};

export default NpcList;