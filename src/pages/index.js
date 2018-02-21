import React, { Component } from 'react'
import Markdown from 'react-markdown'
import StarRatingComponent from 'react-star-rating-component'
import Link from 'gatsby-link'
import { Row, List, Avatar } from 'antd'


class IndexPage extends Component {

  render() {

      const data = this.props.data.ico.edges;
      console.log(data);

    return (
      <div>
        <Row span={24}>
          <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`${item.node.logo}`} />}
              title={<a href="https://ant.design">{item.node.name}</a>}
              description={<p>{item.node.desc}</p>}
            />

          </List.Item>
        )}
        />
        </Row>
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
          logo
          desc
      }
    }
  }
}
`;
