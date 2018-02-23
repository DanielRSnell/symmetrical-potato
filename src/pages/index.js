import React, { Component } from 'react'
import Markdown from 'react-markdown'
import StarRatingComponent from 'react-star-rating-component'
import Link from 'gatsby-link'
import { Button, Image, Item, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './index.css'

class IndexPage extends Component {

  CreateLink(name) {

    const Link = name.toLowerCase().replace(/ /g, "-").replace(/\./g, "-");

    return Link;

  }

  CreateTags(props) {

    if ( props.categories !== null || undefined ) {

      return props.categories.map( item => (
        <Label>{item.name}</Label>
      ))

    }

  }

  render() {

      const data = this.props.data.ico.edges;
      console.log(data);

    return (
      <Item.Group divided>
        {data.map(item => (

          <Item>
        <Item.Image size='small' src={`${item.node.logo}`} />

        <Item.Content verticalAlign='middle'>
          <Item.Header as="a"><h1>{item.node.name}</h1></Item.Header>
          <Item.Meta>
            <span className="tagline"><h3>{item.node.tagline}</h3></span>
          </Item.Meta>
          <Item.Description>{item.node.desc}</Item.Description>
          <Item.Extra>
          <Link to={`/${this.CreateLink(item.node.name)}`}>
             <Button floated='right'>
              Research
            </Button>
          </Link>
          {this.CreateTags(item.node)}
          </Item.Extra>
        </Item.Content>
      </Item>
      ))}
      </Item.Group>
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
          intro
          categories {
            id
            name
        }
      }
    }
  }
}
`;
