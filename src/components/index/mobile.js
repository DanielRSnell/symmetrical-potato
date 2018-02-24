import React, { Component } from 'react';
import { List, Button, Row, Divider, Col, Avatar, Tag } from 'antd';
import m from 'moment';
import Link from 'gatsby-link';

class Mobile extends Component {
	CreateLink(props) {
		if (props.name !== null || undefined) {
			const Link = props.name
				.toLowerCase()
				.replace(/ /g, '-')
				.replace(/\./g, '-');

			return Link;
		}
	}

	CreateEnd(props) {
		const Check = props.end.includes(`0000-00-00 00:00:00`);

		if (Check !== true) {
			return (
				<span className="mobile-from">
					<strong>E: </strong>
					{m(props.end).format('l')}
				</span>
			);
		} else if (Check !== false) {
			return (
				<span className="mobile-from">
					<strong>E: </strong>
					{m(props.preend).format('l')}
				</span>
			);
		} else {
			return (
				<span className="mobile-from">
					<strong>E: </strong>
					<Tag>Unknown</Tag>
				</span>
			);
		}
	}

	CreateStart(props) {
		const Check = props.start.includes(`0000-00-00 00:00:00`);

		if (Check !== true) {
			return (
				<span className="mobile-from">
					<strong>S: </strong>
					{m(props.start).format('l')}
				</span>
			);
		} else if (Check !== false) {
			return (
				<span className="mobile-from">
					<strong>S: </strong>
					{m(props.prestart).format('l')}
				</span>
			);
		} else {
			return (
				<span className="mobile-from">
					<strong>S: </strong>
					<Tag>Unknown</Tag>
				</span>
			);
		}
	}

	CreateTag(props) {
		const predate = m(props.preend).from();
		const date = m(props.end).from();
		const Check = props.start.includes(`0000-00-00 00:00:00`);
		const CheckEnd = date.includes('ago');
		const CheckPre = predate.includes('ago');

		if (CheckEnd === true) {
			return <Tag color="red">ENDED</Tag>;
		} else if (Check !== true) {
			return <Tag color="green">LIVE-ICO</Tag>;
		} else if (CheckPre === false) {
			return <Tag color="blue">PRE-ICO</Tag>;
		} else {
			return <Tag color="purple"> PRE-ICO ENDED</Tag>;
		}
	}

	CreateRating(props) {
		if (props.rating !== null) {
			if (props.rating > 3.9) {
				return <Tag color="green">{props.rating}</Tag>;
			} else if (props.rating > 2) {
				return <Tag color="blue">{props.rating}</Tag>;
			} else {
				return <Tag color="red">{props.rating}</Tag>;
			}
		}
	}

	render() {
		const data = this.props.icos;

		return (
			<div>
				{data.map(item => (
					<Link to={this.CreateLink(item.node)} key={item.node.id}>
						<Row className="item-row" key={item.node.id}>
							<Row className="mobile-item-row" span={24}>
								<Col className="mobile-item-col" span={16}>
									<span className="mobile-class-item">
										<Avatar
											size="large"
											src={item.node.logo}
											className="mobile-avatar"
										/>
									</span>
									<span className="mobile-class-item">
										<span className="mobile-header">{item.node.name}</span>
									</span>
								</Col>
								<Col className="mobile-item-col" span={8}>
									<span className="mobile-class-item">
										<span className="mobile-rating-item">
											{this.CreateRating(item.node)}
										</span>
									</span>
								</Col>
							</Row>
							<Divider />
							<Row className="mobile-item-row" span={24}>
								<p className="mobile-desc">{item.node.desc}</p>
							</Row>
							<Divider />
							<Row className="mobile-item-row" span={24}>
								<Col className="mobile-item-col" span={8}>
									<span className="mobile-class-item">
										{this.CreateTag(item.node)}
									</span>
								</Col>
								<Col className="mobile-item-col" span={8}>
									<span className="mobile-class-item">
										<span className="mobile-start-item">
											{this.CreateStart(item.node)}
										</span>
									</span>
								</Col>
								<Col className="mobile-item-col" span={8}>
									<span className="mobile-class-item">
										<span className="mobile-end-date">
											{this.CreateEnd(item.node)}
										</span>
									</span>
								</Col>
							</Row>
						</Row>
					</Link>
				))}
			</div>
		);
	}
}

export default Mobile;
