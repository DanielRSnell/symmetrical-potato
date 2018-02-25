import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import { Avatar, Row, Col, Tag, Tabs, Divider } from 'antd';
import './post.css';

const TabPane = Tabs.TabPane;

class BlogPostTemplate extends React.Component {
	CreateRaw(props) {
		if (props.about !== null) {
			return { __html: props.about.split('<br />').join('<p></p>') };
		} else {
			const raw = '<h3>There is no content about this ICO</h3>';
			return raw;
		}
	}

	CreateTags(props) {
		if (props.categories !== null || undefined) {
			return props.categories.map(item => (
				<Tag color="#663399" key={item.id}>
					{item.name}
				</Tag>
			));
		}
	}

	callback(key) {
		console.log(key);
	}

	render() {
		console.log(this.props.data);

		const data = this.props.data.ico;

		return (
			<div>
				<Row className="profile-container">
					<Row className="section-top">
						<Row className="profile-row" span={24}>
							<Col className="profile-col" span={24}>
								<center>
									<img src={data.logo} className="header-logo" />
								</center>
							</Col>
						</Row>
						<Row className="profile-row" span={24}>
							<Col className="profile-col" span={24}>
								<center>
									<span className="header-title">{data.name}</span>
								</center>
							</Col>
						</Row>
						<Row className="profile-row" span={24}>
							<Col className="profile-col" span={24}>
								<center>
									<span className="header-secondary">{data.tagline}</span>
								</center>
							</Col>
						</Row>
					</Row>
					<Row className="section-mid">
						<Row className="profile-row" span={24}>
							<center>{this.CreateTags(data)}</center>
						</Row>
						<Row className="profile-content" span={24}>
							<Tabs defaultActiveKey="1" onChange={this.callback}>
								<TabPane tab="About" key="1">
									<div className="about-header-section">
										<h1>
											<strong>About: </strong>
											{data.name}
										</h1>
									</div>
									<div dangerouslySetInnerHTML={this.CreateRaw(data)} />
								</TabPane>
								<TabPane tab="Status" key="2">
									Something Goes Here
								</TabPane>
								<TabPane tab="Milestones" key="3">
									Something Goes Here
								</TabPane>
								<TabPane tab="Team" key="4">
									Something Goes Here
								</TabPane>
								<TabPane tab="Reviews" key="5">
									Something Goes Here
								</TabPane>
								<TabPane tab="Financials" key="6">
									Something Goes Here
								</TabPane>
								<TabPane tab="Links" key="7">
									Something Goes Here
								</TabPane>
								<TabPane tab="Video" key="8">
									Something Goes Here
								</TabPane>
							</Tabs>
						</Row>
					</Row>
				</Row>
			</div>
		);
	}
}

export default BlogPostTemplate;
export const pageQuery = graphql`
	query FetchByName($page_name: String!) {
		ico: icoProfiles(name: { eq: $page_name }) {
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
