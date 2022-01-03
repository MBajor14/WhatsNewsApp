import { Component } from 'react';
import WeatherApiKit from './libs/weatherApiKit';
import Articles from './components/Articles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

interface myState { 
    WeatherData: any,
    WeatherData2: any,
    NewsData: any,
    NewsData2: any
};

class App extends Component<{}, myState> {
    constructor(props){
        super(props);
        this.state = { 
            WeatherData: null,
            WeatherData2: null,
            NewsData: null,
            NewsData2: null
        };
    }

    componentDidMount(): void {  }

    getCurrentWeather(): void {
        // let currentWeather$ = WeatherApiKit.getCurrentWeather('Staten Island');
        // currentWeather$.subscribe(d => {
        //     d.then(WeatherData => {
        //         console.log(WeatherData);
        //         this.setState({ WeatherData });
        //     });
        // });

        // let currentWeather2$ = WeatherApiKit.getCurrentWeather('Staten Island');
        // currentWeather2$.subscribe(d => {
        //     d.then(WeatherData2 => {
        //         // console.log(WeatherData2);
        //         this.setState({ WeatherData2 });
        //     });
        // });
    }

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