import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Row, Divider, Col, Layout, Tag } from 'antd';

class BlogPostTemplate extends React.Component {

  CreateRaw(props) {
    if (props.about !== null ) {
      return props.about.split("<br />").join("<br /><br />")
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
          <Row span={24}>
            <Col className="profile-logo" span={3}>
              <img src={`${data.logo}`} alt={`${data.name.replace(/ /g, '-')}`} />
            </Col>
            <Col className="profile-header" span={20} style={{padding: 5}}>
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
          <Row className="profile-tags" style={{padding: 10}}>
            {data.categories.map(item => {
              const CreateTag = (
                <Tag key={item.id} className="ico-tags">
                  {item.name}
                </Tag>
              );
              return CreateTag;
            })}
          </Row>
          <Divider />
          <Row>
            <Row>
              <h2>
                <strong>About: </strong> {data.name}
              </h2>
            </Row>
            <Row>
              <div dangerouslySetInnerHTML={{__html: this.CreateRaw(data) }} />
            </Row>
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
