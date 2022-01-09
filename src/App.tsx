import { Component } from 'react';
import Articles from './components/Articles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component<{}, {}> {
    constructor(props){super(props)}

    render(): JSX.Element {
        return (
            <div id="App">
                <div className="header">
                    <h4>Whats News</h4>
                </div>
                <Articles />
            </div>
        );
    }
}

export default App;