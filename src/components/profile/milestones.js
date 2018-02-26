import React, { Component } from 'react';
import { List } from 'antd';

class Milestones extends Component {
	render() {
		const data = this.props.milestones;

		if (data.mile !== null || undefined) {
			return (
				<List
					itemLayout="horizontal"
					dataSource={data.mile}
					renderItem={item => (
						<List.Item>
							<List.Item.Meta title={item.title} description={item.content} />
						</List.Item>
					)}
				/>
			);
		}
	}
}

export default Milestones;
