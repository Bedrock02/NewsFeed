import React from 'react';
import NewsArticleStyles from './styles';

class NewsArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.article;
    this.openArticle = this.openArticle.bind(this);
  }

  openArticle () {
    window.open(this.state.url, "_blank");
  }
  render() {
    return(
      <div className="row" style={NewsArticleStyles.article} onClick={this.openArticle}>
        <div className="col-6">
          <img style={NewsArticleStyles.image} src={this.state.urlToImage} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-6">
          <h3>{this.state.title}</h3>
          <p style={NewsArticleStyles.description}>{this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default NewsArticle;
