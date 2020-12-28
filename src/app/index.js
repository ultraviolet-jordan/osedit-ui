import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ItemDashBoard from './item';
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
                    <Redirect
                        from="*"
                        to="/overlays"
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;