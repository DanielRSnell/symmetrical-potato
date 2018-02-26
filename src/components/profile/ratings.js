import React, { Component } from 'react';
import { Col, Avatar, Row, List } from 'antd';

class Ratings extends Component {
	render() {
		const data = this.props.data;
		console.log(data);
		if (data !== null || undefined) {
			return (
				<List
					itemLayout="horizontal"
					dataSource={data}
					renderItem={item => (
						<List.Item>
							<List.Item.Meta
								avatar={item.photo}
								title={item.name}
								description={item.review}
							/>
							<span className="rate-item">
								<strong>Product:</strong> {item.product}
							</span>
							<span className="rate-item">
								<strong>Profile:</strong> {item.profile}
							</span>
							<span className="rate-item">
								<strong>Team:</strong> {item.team}
							</span>
							<span className="rate-item">
								<strong>Vision:</strong> {item.vision}
							</span>
						</List.Item>
					)}
				/>
			);
		}
	}
}

export default Ratings;
