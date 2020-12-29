import React, { useEffect, useState } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { getAllOverlays } from '../../service/overlay';

const OverlaySwatches = () => {
    const [overlays, setOverlays] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        getAllOverlays().then((response) => {
            setOverlays(response);
            setLoaded(true);
        })
    }, []);

    if (!isLoaded) {
        return <CircularProgress color="secondary" />
    }

    return (
        <div className="overlay-container container">
            { overlays.map((overlay) => <img src={`http://localhost:8080/overlays/view/${overlay.id}`} />)}
        </div>
    );
};

export default OverlaySwatches;