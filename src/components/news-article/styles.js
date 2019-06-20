const NewsArticleStyles = {
  article: {
    padding: '100px',
    minHeight: '400px',
    borderBottom: '1px solid #e9ecef',
    cursor: 'pointer',
  },
  description: {
    fontSize: '19px',
    height: '75px',
    marginTop: '30px',
    textOverflow: 'ellipsis',
  },
  image: {
    'WebkitTransform': 'scale(0.75)', /* Saf3.1+, Chrome */
     'MozTransform': 'scale(0.75)', /* FF3.5+ */
      'msTransform': 'scale(0.75)', /* IE9 */
       'OTransform': 'scale(0.75)', /* Opera 10.5+ */
          'transform': 'scale(0.75)',
  }
}
export default NewsArticleStyles;
