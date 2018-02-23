import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './post.css';

class BlogPostTemplate extends React.Component {

  CreateRaw(props) {
    if (props.about !== null ) {
      return props.about.split("<br />").join("<p></p>")
    } else {
      const raw = "<h3>There is no content about this ICO</h3>";
      return raw;
    }
  }

  render() {

    console.log(this.props.data);

    const data = this.props.data.ico;

    return (
      <div>
          <h1>{data.name} example....</h1>
        </div>
    )
  }
}

export default BlogPostTemplate
export const pageQuery = graphql`
query FetchByName($page_name: String!) {
  ico: icoProfiles(name: {eq: $page_name}) {
    id
    name
    logo
    desc
    about
    tagline
    categories: icoCategories {
      id
      name
    }
  }
}
`;
