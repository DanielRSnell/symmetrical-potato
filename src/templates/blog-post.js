import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import m from 'moment';
import { Avatar, Row, Col, Tag, Divider, Layout, Tabs, Button } from 'antd';
import Milestones from '../components/profile/milestones.js';
import Financial from '../components/profile/financial.js';
import Ratings from '../components/profile/ratings.js';
import './post.css';
const TabPane = Tabs.TabPane;
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

	GetWebsite(data) {
		if (data.links !== null) {
			return (
				<Link to={data.links.www}>
					{' '}
					<Button>Review</Button>{' '}
				</Link>
			);
		}
	}

	GetGithub(data) {
		if (data.links !== null) {
			return (
				<Link to={data.links.github}>
					{' '}
					<Button>Review</Button>{' '}
				</Link>
			);
		}
	}

	GetTwitter(data) {
		if (data.links !== null) {
			return (
				<Link to={data.links.twitter}>
					{' '}
					<Button>Review</Button>{' '}
				</Link>
			);
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
					<Row className="profile-intro">
						<h1>INTRODUCTION</h1>
						{data.intro}
					</Row>
					<Row type="flex" justify="center" className="profile-row" span={24}>
						<Col className="profile-content" span={24}>
							<Row className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={24}>
									<span className="rating-header">{data.rating}</span>
								</Col>
							</Row>
							<Row className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={6}>
									<span className="rating-sub">{data.ratingTeam}</span>
									<span className="rating-title">Team</span>
								</Col>
								<Col className="sidebar-item" span={6}>
									<span className="rating-sub">{data.ratingVision}</span>
									<span className="rating-title">Vision</span>
								</Col>
								<Col className="sidebar-item" span={6}>
									<span className="rating-sub">{data.ratingProfile}</span>
									<span className="rating-title">Profile</span>
								</Col>
								<Col className="sidebar-item" span={6}>
									<span className="rating-sub">{data.ratingProduct}</span>
									<span className="rating-title">Product</span>
								</Col>
							</Row>
							<Row span={24} className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-title-item"> Status: </span>
								</Col>
								<Col className="sidebar-item" span={12}>
									<Tag color="green">Active</Tag>
								</Col>
							</Row>
							<Row span={24} className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-title-item"> Pre-ICO Start: </span>
								</Col>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-content-item">
										{m(data.prestart).format('ll')}{' '}
									</span>
								</Col>
							</Row>
							<Row span={24} className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-title-item"> Pre-ICO End: </span>
								</Col>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-content-item">
										{m(data.preend).format('ll')}{' '}
									</span>
								</Col>
							</Row>
							<Row span={24} className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-title-item"> ICO Start: </span>
								</Col>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-content-item">
										{m(data.start).format('ll')}{' '}
									</span>
								</Col>
							</Row>
							<Row span={24} className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-title-item"> ICO End: </span>
								</Col>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-content-item">
										{m(data.end).format('ll')}{' '}
									</span>
								</Col>
							</Row>
							<Row span={24} className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-title-item"> Website: </span>
								</Col>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-content-item">
										{this.GetWebsite(data)}
									</span>
								</Col>
							</Row>
							<Row span={24} className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-title-item"> Github: </span>
								</Col>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-content-item">
										{this.GetGithub(data)}
									</span>
								</Col>
							</Row>
							<Row span={24} className="profile-sidebar-box" span={24}>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-title-item"> Twitter: </span>
								</Col>
								<Col className="sidebar-item" span={12}>
									<span className="sidebar-content-item">
										{this.GetTwitter(data)}
									</span>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className="profile-bottom-section" span={24}>
						<Col className="profile-end" span={24}>
							<Tabs defaultActiveKey="1" onChange={this.callback}>
								<TabPane tab="About" key="1">
									<h1>
										<strong>About: </strong> {data.name}
									</h1>
									<div
										className="profile-content-row"
										dangerouslySetInnerHTML={this.CreateRaw(data)}
									/>
								</TabPane>
								<TabPane tab="Milestones" key="2">
									<Milestones milestones={data.mile} />
								</TabPane>
								<TabPane tab="Financial" key="3">
									<Financial data={data} />
								</TabPane>
								<TabPane tab="Reviews" key="4">
									<Ratings data={data.Rate} />
								</TabPane>
							</Tabs>
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
			intro
			tagline
			rating
			ratingTeam
			ratingVision
			ratingProfile
			ratingProduct
			prestart
			preend
			start
			end
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
			Rate: icoRatings {
				agree
				name
				photo
				review
				product
				profile
				team
				vision
				weight
			}
		}
	}
`;
