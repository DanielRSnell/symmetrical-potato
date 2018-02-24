import React, { Component } from 'react';
import { Col, Row, Tag, Button, Divider } from 'antd';
import Link from 'gatsby-link';

class Desktop extends Component {
	CreateLink(props) {
		if (props.name !== null || undefined) {
			const Link = props.name
				.toLowerCase()
				.replace(/ /g, '-')
				.replace(/\./g, '-');

			return Link;
		}
	}

	CreateTags(props) {
		if (props.categories !== null || undefined) {
			return props.categories.map(item => (
				<Tag
					className="item-label"
					key={`${item.id}`}
					color="#663399"
					style={{ margin: 5 }}>
					{item.name}
				</Tag>
			));
		}
	}

	render() {
		const data = this.props.icos;
		console.log(data);

		return (
			<div>
				{data.map(item => (
					<Row className="item-row" span={24} key={`${item.node.id}`}>
						<Col className="item-asset" span={4}>
							<img className="item-image" src={`${item.node.logo}`} />
						</Col>
						<Col className="item-meta" span={16}>
							<Row className="item-header">
								<h1>{item.node.name}</h1>
							</Row>
							<Row className="item-tagline">{item.node.tagline}</Row>
							<Row className="item-desc">{item.node.desc}</Row>
							<Row className="item-extras">
								<Col className="item-tags">{this.CreateTags(item.node)}</Col>
								<Col className="item-action">
									<Link to={`${this.CreateLink(item.node)}`}>
										<Button size="large">Research</Button>
									</Link>
								</Col>
							</Row>
						</Col>
					</Row>
				))}
			</div>
		);
	}
}

export default Desktop;
