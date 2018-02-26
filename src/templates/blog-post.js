import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import { Avatar, Row, Col, Tag, Divider, Layout } from 'antd';
import './post.css';

const { Footer } = Layout;

class BlogPostTemplate extends React.Component {
	CreateRaw(props) {
		if (props.about !== null) {
			return { __html: props.about.split('<br />').join('<p></p>') };
		} else {
			const raw = { __html: '<h3>There is no content about this ICO</h3>' };
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
				<Row className="section-mid" span={24}>
					<Row className="profile-row" span={24}>
						<center>{this.CreateTags(data)}</center>
					</Row>
					<Row type="flex" justify="center" className="profile-row" span={24}>
						<Col span={12}>
							<div
								className="profile-content-row"
								dangerouslySetInnerHTML={this.CreateRaw(data)}
							/>
						</Col>
						<Col className="profile-content" span={10} push={2}>
							<Row span={24}>
								<Col className="profile-sidebar-box" span={24}>
									<span className="rating-header">{data.rating}</span>
								</Col>
							</Row>
							<Row span={24}>
								<Col className="profile-sidebar-box" span={6}>
									<span className="rating-sub">{data.ratingTeam}</span>
									<span className="rating-title">Team</span>
								</Col>
								<Col className="profile-sidebar-box" span={6}>
									<span className="rating-sub">{data.ratingVision}</span>
									<span className="rating-title">Vision</span>
								</Col>
								<Col className="profile-sidebar-box" span={6}>
									<span className="rating-sub">{data.ratingProfile}</span>
									<span className="rating-title">Profile</span>
								</Col>
								<Col className="profile-sidebar-box" span={6}>
									<span className="rating-sub">{data.ratingProduct}</span>
									<span className="rating-title">Product</span>
								</Col>
							</Row>
						</Col>
					</Row>
				</Row>
			</Row>
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
			rating
			ratingTeam
			ratingVision
			ratingProfile
			ratingProduct
			categories: icoCategories {
				id
				name
			}
			mile: milestones {
				id
				title
				content
			}
			exchanges: icoExchanges {
				id
				logo
				price
				roi
				name
			}
			finance: icoFinance {
				platform
				accepting
				bonus
				distributed
				hardcap
				minimum
				platform
				price
				raised
				softcap
				token
				tokens
				tokentype
			}
			links: icoLinks {
				bitcointalk
				discord
				facebook
				github
				medium
				reddit
				slack
				telegram
				twitter
				whitepaper
				www
				video
				bounty
			}
		}
	}
`;
