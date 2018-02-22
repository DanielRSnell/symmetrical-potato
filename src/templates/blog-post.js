import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Row, Divider, Col, Layout, Tag } from 'antd';

class BlogPostTemplate extends React.Component {

  render() {

    console.log(this.props.data);

    const data = this.props.data.ico;

    return (
      <div>
          <Row span={24}>
            <Col className="profile-logo" span={3}>
              <img src={`${data.logo}`} alt={`${data.name.replace(/ /g, '-')}`} />
            </Col>
            <Col className="profile-header" span={8} style={{margin: -5}}>
              <Row>
              <h1>
                {data.name}
              </h1>
              </Row>
              <Row>
                <h4>{data.tagline}</h4>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <div dangerouslySetInnerHTML={{__html: data.about.split("<br />").join("<br /><br />") }} />
            </Col>
          </Row>
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