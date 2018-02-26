import React, { Component } from 'react';
import { Col, Avatar, Row, Divider } from 'antd';

class Financial extends Component {
	render() {
		const data = this.props.data;
		console.log(data);
		if (data !== null || undefined) {
			return (
				<div className="exchange-items">
					<Row className="financial-numbers" span={24}>
						<Col className="financial-item" span={12}>
							<strong>Accepting: </strong> {data.finance.accepting}
						</Col>
						<Col className="financial-item" span={12}>
							<strong>Platform: </strong> {data.finance.platform}
						</Col>
					</Row>
					<Row className="financial-numbers" span={24}>
						<Col className="financial-item" span={12}>
							<strong>Distributed: </strong> {data.finance.distributed}
						</Col>
						<Col className="financial-item" span={12}>
							<strong>Price: </strong> {data.finance.price}
						</Col>
					</Row>
					<Row className="financial-numbers" span={24}>
						<Col className="financial-item" span={12}>
							<strong>Harcap: </strong> {data.finance.hardcap}
						</Col>
						<Col className="financial-item" span={12}>
							<strong>Softcap: </strong> {data.finance.softcap}
						</Col>
					</Row>
					{data.exchanges.map(item => (
						<Row className="exchange-list-item" span={20}>
							<Row className="exchange-content">
								<Col className="list-item" span={2}>
									<Avatar src={item.logo} />
								</Col>
								<Col className="list-item" span={5} style={{ margin: 5 }}>
									<strong>{item.name}</strong>
								</Col>
								<Col className="list-item" span={5} style={{ margin: 5 }}>
									<strong>Price:</strong> ${item.price}
								</Col>
								<Col className="list-item" span={5} style={{ margin: 5 }}>
									<strong>ROI:</strong> {item.roi}
								</Col>
							</Row>
							<Divider />
						</Row>
					))}
				</div>
			);
		}
	}
}

export default Financial;
