import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ItemDashBoard from './items';
import NPCDashboard from './npcs';

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
                        component= { NPCDashboard }
                    />
                    <Redirect
                        from="*"
                        to="/items"
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;