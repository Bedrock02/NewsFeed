import axios from 'axios';

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY
const base_url = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}`;

const fetchNews = (query, language, country) => {
  let url = base_url + `&language=${language}&country=${country}`
  if(query) {
    url = url + `&q=${query}`;
  }
  return axios({
    url,
    method: 'get',
  });
}

export default fetchNews;
