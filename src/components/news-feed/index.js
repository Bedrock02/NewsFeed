import React from 'react';
import NewsFeedStyles from './styles';
import NewsArticle from '../news-article/';
import fetchNews from '../../service/news-api';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      totalResults: 0,
      searchQuery: '',
      lang: 'en',
      country: 'us',
      visibleArticles: [],
      offset: null,
    };
    this.getNewsArticles = this.getNewsArticles.bind(this);
    this.navigate = this.navigate.bind(this);
  }
  componentDidMount() {
    this.getNewsArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.offset === this.state.offset) {
      return;
    }
    console.log("SETARTICLES");
    this.setArticles();
  }

  getNewsArticles() {
    const {searchQuery, lang, country, offset} = this.state;
    fetchNews(searchQuery, lang, country)
    .then(res => {
      this.setState({
        articles: res.data.articles,
        totalResults: res.data.totalResults,
        offset: offset || 0,
      });
    });
  }

  setArticles () {
    let visibleArticles;
    if(this.state.articles.length <= 10) {
      visibleArticles = this.state.articles;
    } else {
      visibleArticles = this.state.articles.slice(
        0 + this.state.offset,
        9 + this.state.offset
      )
    }
    this.setState({visibleArticles});
  }

  navigate(direction) {
    if(direction === 'prev' && this.state.offset === 0) {
        window.scrollTo(0, 0,);
        return;
    }
    const newOffset = direction === 'prev' ? this.state.offset - 10 : this.state.offset + 10;
    this.setState({offset: newOffset});
  }
  render() {
    console.log(this.state.visibleArticles);
    const articles = this.state.visibleArticles.map((article, index) => {
      return (<NewsArticle key={article.title} article={article}/>);
    });

    return(
      <>
        <div className="row" id="searchComponent">
          <div className="col-10">
            <input style={NewsFeedStyles.search} type="text" placeholder="Mosaic" />
          </div>
          <div className="col">
            <button style={NewsFeedStyles['search-button']}type="button" className="btn btn-primary">Search</button>
          </div>
        </div>

        <div id="articlesContainer">
          {articles}
        </div>

        <div className="row" style={NewsFeedStyles.navigation}>
          <div className="col-6">
            <button onClick={() => {this.navigate('prev')}} type="button" className="btn btn-light">Prev</button>
          </div>
          <div className="col-6">
            <button onClick={() => {this.navigate('next')}} type="button" className="btn btn-light">Next</button>
          </div>
        </div>
      </>
    );
  }
}

export default NewsFeed;
