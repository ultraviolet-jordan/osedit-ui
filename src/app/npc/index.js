import React, { useEffect, useState } from 'react';
import { getAllNpcs } from '../../service/npc';
import NpcList from './npcList';

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
            <div title="npcs-container-title container-title" style={{display:'flex', justifyContent:'center'}}>
                <h2>OSRS Npc List</h2>
            </div>
            <NpcList npcs={state.npcs} />
        </div>
    )
}

export default NpcDashboard;