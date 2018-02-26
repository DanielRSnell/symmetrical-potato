import React, { Component } from 'react';
import Markdown from 'react-markdown';
import StarRatingComponent from 'react-star-rating-component';
import Desktop from '../components/index/desktop.js';
import Mobile from '../components/index/mobile.js';
import './index.css';

class IndexPage extends Component {
	state = {
		width: 1000
	};

	render() {
		const data = this.props.data.ico.edges;

		if (typeof window !== 'undefined') {
			if (window.innerWidth > 609) {
				return (
					<div>
						<Desktop icos={data} />
					</div>
				);
			} else if (window.innerWidth < 609) {
				return (
					<div>
						<Mobile icos={data} />
					</div>
				);
			}
		} else {
			return (
				<div>
					<Desktop icos={data} />
				</div>
			);
		}
	}
}

export default IndexPage;

export const pageQuery = graphql`
	query fetchprofiles {
		ico: allIcoProfiles {
			edges {
				node {
					id
					name
					tagline
					logo
					desc
					rating
					start
					end
					prestart
					preend
					categories: icoCategories {
						id
						name
					}
				}
			}
		}
	}
`;
