import React, { Component } from 'react'
import Markdown from 'react-markdown'
import StarRatingComponent from 'react-star-rating-component'
import Link from 'gatsby-link'
import './index.css'

class IndexPage extends Component {

  CreateLink(name) {

    const Link = name.toLowerCase().replace(/ /g, "-").replace(/\./g, "-");

    return Link;

  }



  render() {

      const data = this.props.data.ico.edges;
      console.log(data);

    return (
      <div>
        Example Div
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
    query fetchprofiles {
      ico: allIcoProfiles {
      edges {
        node {
          name
          tagline
          logo
          desc
          categories: icoCategories {
            id
            name
        }
      }
    }
  }
}
`;
