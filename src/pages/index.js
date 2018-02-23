import React, { Component } from 'react'
import Markdown from 'react-markdown'
import StarRatingComponent from 'react-star-rating-component'
import Link from 'gatsby-link'
import { Item, Label, Image, Button } from 'semantic-ui-react';
import './index.css'

class IndexPage extends Component {

  CreateLink(name) {

    const Link = name.toLowerCase().replace(/ /g, "-").replace(/\./g, "-");

    return Link;

  }

  CreateTags(props) {
    if ( props.categories !== null ) {
      return props.categories.map( item => (
        <Label key={`${item.id}`} content={`${item.name}`}></Label>
      ))
    }
  }

  render() {

      const data = this.props.data.ico.edges;
      console.log(data);

    return (
      <div>
        <Item.Group divided>
        {data.map( item => (
          <Item>
            <Item.Image className="ico-logo" src={`${item.node.logo}`} />
            <Item.Content>
              <Item.Header as='a'>
                <span className="ico-header">
                  {item.node.name}
                </span>
              </Item.Header>
              <Item.Meta>
                <span className="ico-tagline">
                  {item.node.tagline}
                </span>
              </Item.Meta>
              <Item.Description>
                {item.node.desc}
              </Item.Description>
              <Item.Extra>
                {this.CreateTags(item.node)}
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
        </Item.Group>
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
