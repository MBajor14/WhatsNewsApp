import { from, map, Observable, switchMap } from "rxjs";

const API_KEY = '';
const BASE_URL = 'https://newsapi.org/v2';

export default class NewsApiKit {
    static get(url: string): Observable<any> {
        return from(fetch(url)).pipe(switchMap(res => res.json()));
                // switchMap(data => data.then(d => { return d}))
    }

    static getEverythingNews(query: string): Observable<any> {
        return this.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
    }

    static getTopHeadlines(query: string, country = 'us'): Observable<any> {
        return this.get(`${BASE_URL}/top-headlines?country=${country}&page=1&apiKey=${API_KEY}`);
    }
}