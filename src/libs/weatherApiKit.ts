import { from, map, Observable, tap } from "rxjs";

const API_KEY = '';
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export default class WeatherApiKit {
    static get(url: string): Observable<any> {
        return from(fetch(url)).pipe(map(res => res.json()));
    }

    static getCurrentWeather(city: string): Observable<any> {
        return this.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`);
    }

    static getDailyForecast(city: string, days: number): Observable<any> {
        return this.get(`${BASE_URL}/forecast/daily?q=${city}&cnt=${days}&appid=${API_KEY}`);
    }
}