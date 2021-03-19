import ReactDOM from "react-dom";
import React from 'react';
import {Keeper} from './Keeper'
import {SignerBlock} from './SignerBlock'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">WavesKeeper</Link>
                        </li>
                        <li>
                            <Link to="/wavessigner">WavesSigner Buttons</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/">
                            <Keeper/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route path="/wavessigner">
                            <SignerBlock/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

const app = document.getElementById('app');
if (app) {
    ReactDOM.render(<App/>, app);
}