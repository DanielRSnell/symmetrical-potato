import React, { Component } from 'react'
import Markdown from 'react-markdown'
import StarRatingComponent from 'react-star-rating-component'
import Link from 'gatsby-link'
import { Col, Row, Tag, Button, Divider } from 'antd';
import './index.css'

class IndexPage extends Component {

  CreateLink(name) {

    const Link = name.toLowerCase().replace(/ /g, "-").replace(/\./g, "-");

    return Link;

  }

  CreateTags(props) {

    if ( props.categories !== null || undefined ) {
      return props.categories.map( item => (
        <Tag key={`${item.id}`} color="#663399">{item.name}</Tag>
      ))
    }
  }

  render() {

      const data = this.props.data.ico.edges;
      console.log(data);
      console.log(this.props);

    return (
      <div>
        {data.map( item => (
          <Row className="item-row" span={24}>
            <Col className="item-asset" span={4}>
              <img className="item-image" src={`${item.node.logo}`} />
            </Col>
            <Col className="item-meta" span={16}>
              <Row className="item-header">
                <h1>{item.node.name}</h1>
              </Row>
              <Row className="item-tagline">
                {item.node.tagline}
              </Row>
              <Row className="item-desc">
                {item.node.desc}
              </Row>
              <Row className="item-extras">
                <Col className="item-tags">
                  {this.CreateTags(item.node)}
                </Col>
                <Col className="item-action">
                  <Link to={`${this.CreateLink(item.node.name)}`}>
                  <Button size="large">Research</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
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
