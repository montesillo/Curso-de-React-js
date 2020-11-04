import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
function App(){
    return (
        <BrowserRouter>
            <div>
                <switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                </switch>
            </div>
        </BrowserRouter>
    );
}

export default App;