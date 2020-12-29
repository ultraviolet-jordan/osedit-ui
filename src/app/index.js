import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ItemDashBoard from './item';
import MapDashboard from './map';
import NpcDashboard from './npc';
import OverlayDashboard from './overlay';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/items"
                        component={ ItemDashBoard }
                    />
                    <Route
                        path="/npcs"
                        component= { NpcDashboard }
                    />
                    <Route
                        path="/overlays"
                        component= { OverlayDashboard }
                    />
                    <Route
                        path="/map"
                        component= { MapDashboard }
                    />
                    <Redirect
                        from="*"
                        to="/map"
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;