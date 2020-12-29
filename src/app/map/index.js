import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import OverlaySwatches from '../overlay';

import { viewMap } from '../../service/map';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid #000000'
    },
});

const MapDashboard = () => {
    const canvasRef = useRef(null);

    const [map, setMap] = useState();

    const classes = useStyles();

    const draw = (tiles, scale = 10) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = 800;
        canvas.height = 1000;

        for (let x = 0; x < tiles[0].length; x++) {
            for (let y = 0; y < tiles[1].length; y++) {
                context.lineWidth = 0.1;
                context.strokeRect(x, y, 2, 2);
                context.setTransform(scale, 0, 0, scale, 0, 0);

                const image = document.createElement("img");
                const overlayId = tiles[x][y].overlayId;

                image.src = `http://localhost:8080/overlays/view/${overlayId}?width=1&height=1`;
                image.onload = () => {
                    context.drawImage(image, x, y);
                    context.lineWidth = 0.1;
                    context.strokeStyle = 'red';
                    context.strokeRect(x, y, 1, 1);
                    context.setTransform(scale, 0, 0, scale, 0, 0);
                };
            }
        }
    }

    const onKeyDown = (event) => {
        const plusKey = 187;
        const minusKey = 189;
        
        if (event.keyCode === plusKey) {
            draw(map.data, 10)
        } else if (event.keyCode == minusKey) {
            draw(map.data, 5)
        }
    }
 
    useEffect(() => {
        window.onKeyDown = onKeyDown;

        viewMap().then((response) => {
            setMap({
                data: response.data
            });
            draw(response.data);
        });
    }, []);

    return (
        <div className={ classes.root } onKeyDown={ onKeyDown } tabIndex={ 1 }>
            <canvas ref={canvasRef} className="map-container container" />
            <div className="overlay-swatches">
                Overlay Swatches
                <OverlaySwatches />
            </div>
        </div>
    );
};

export default MapDashboard;

