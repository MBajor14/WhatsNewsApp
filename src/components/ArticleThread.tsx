interface ArticleData {
    title: string,
    author: string,
    description: string,
    content: string,
    urlToImage: string,
    url: string,
    publishedAt: Date,
    source: {
        id: string|number,
        name: string
    }
}

interface props {
    ArticleData: ArticleData
}

const ArticleThread = (props: props) => {
    const { 
        title, author, content, description, url, urlToImage, publishedAt, 
        source: { name: sourceName, id } 
    } = props.ArticleData;

    return (
        <div className="news-article">
            <img className="article-img" src={urlToImage} />
            <div className="column">
                <h3 className="article-title">{title}</h3>
                <div className="article-content">
                    <div className="d-flex">
                        <strong className="mr-2">{sourceName}</strong>
                        <div className="article-content-author mr-2">{author}</div>
                        <div className="article-content-author">{publishedAt}</div>
                    </div>
                    <p>{description}</p>
                </div>
                <a href={url}>Go to article</a>
            </div>
        </div>
    );
};

export default ArticleThread;