import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'


class BlogPostTemplate extends React.Component {
  render() {

    console.log(this.props.data);

    const data = this.props.data.ico;

    return (
      <div>
        <div className="page-title">
        <h1>{data.name}</h1>
        </div>
        <div className="page-description">
        <p className="long-text">
          {data.desc}
          </p>
          </div>
      </div>
    )
  }
}

export default BlogPostTemplate
export const pageQuery = graphql`
query FetchByName($page_name: String!) {
  ico: icoProfiles(name: {eq: $page_name}) {
  name
  desc
  }
}
`;
