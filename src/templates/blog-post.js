import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Row, Divider, Col, Layout, Tag } from 'antd';
import { List } from 'semantic-ui-react';
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
          <div className="header-image">
              <img className="header-logo" src={`${data.logo}`} alt={`${data.name.replace(/ /g, '-')}`} />
              </div>
            <div className="header-text">
              <div>
                <span className="header-profile">{data.name}</span>
                </div>
              <div>
                <span className="header-tagline">{data.tagline}</span>
              </div>
          </div>
          <div className="profile-tags" style={{margin: 5}} type="flex" justify="center">
            {data.categories.map(item => {
              const CreateTag = (
                <div key={item.id} className="ico-tags" style={{margin: 5}}>
                  {item.name}
                </div>
              );
              return CreateTag;
            })}
          </div>
          <div>
            <div>
              <h2>
                <strong>About: </strong> {data.name}
              </h2>
            </div>
            <div>
              <div dangerouslySetInnerHTML={{__html: this.CreateRaw(data) }} />
            </div>
          </div>
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
    categories {
      id
      name
    }
  }
}
`;
