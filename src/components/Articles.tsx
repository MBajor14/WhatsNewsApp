import react, { Component } from 'react';
import { switchMap } from 'rxjs';
import ArticleThread from '../components/ArticleThread';
import NewsApiKit from '../libs/newsApiKit';

interface ArticlesState {
    newsData: any;
    searchFilters: {
        query: string;
    };
}

class Articles extends Component<{}, ArticlesState> {
    constructor(props) {
        super(props);
        this.state = {
            newsData: null,
            searchFilters: {
                query: ''
            }
        };
    }

    componentDidMount(): void {  }

    onChange(event): void {
        event.preventDefault();
        let query = event.target.value;
        this.setState({ searchFilters: { query } });
    }

    onSubmit(event): void {
        event.preventDefault();
        this.searchNews();
    }
    
    searchNews(): void {
        const { state: { searchFilters: { query }}} = this;

        fetch(`http://localhost:4200/api/news/${query}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ newsData: data });        
            })
            .catch(e => console.error(e));
    }

    render(){
        const { newsData } = this.state;
        return (
            <div className="news-app">
                <form className="search-filters" onSubmit={this.onSubmit.bind(this)} >
                    <input type="text" onChange={this.onChange.bind(this)} />
                    <input type="submit" value="Search" />
                </form>
                <div className="news-article-list">
                {
                    newsData && newsData.articles && newsData.articles.map((a, i) => <ArticleThread key={i} ArticleData={a} />)
                }
                </div>
            </div>
        );
    };
}

export default Articles;