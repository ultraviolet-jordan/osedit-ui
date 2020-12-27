import React, { useEffect, useState } from 'react';
import { getAllNpcs } from '../../service/npc';
import NpcList from './NpcList';

const NpcDashboard = () => {
    const [state, setState] = useState({
        isLoaded: false,
        npcs: []
    });

    useEffect(() => {
        getAllNpcs().then((data) => {
            setState({ isLoaded: true, npcs: data })
        });
    }, []);

    if (!state.isLoaded) {
        return <div>Loading npcs...</div>
    }

    return (
        <div className="npcs-container container">
            <h2>OSRS Npcs:</h2>
            <NpcList npcs={ state.npcs }/>
        </div>
    )
}

export default NpcDashboard;