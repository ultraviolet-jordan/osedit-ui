import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ItemDashBoard from './item';
import NpcDashboard from './npc';

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
                    <Redirect
                        from="*"
                        to="/npcs"
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;