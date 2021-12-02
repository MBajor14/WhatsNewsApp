import React, { Component } from 'react';
import { Subject, BehaviorSubject, Observable, of, from } from 'rxjs';
import WeatherApiKit from './libs/weatherApiKit';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    componentDidMount() {
        let currentWeather$ = WeatherApiKit.getCurrentWeather('Staten Island');
        currentWeather$.subscribe(weatherData => {

            weatherData.then(console.log);
        });

        console.log('process.env',process.env);
    }

    render() {
        return (
            <div>
                <h4>Whats News</h4>
            </div>
        );
    }
}

export default App;