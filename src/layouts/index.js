import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Layout } from 'antd';

const { Footer } = Layout;

import './index.css';

const Header = () => (
	<div
		style={{
			background: '#001529',
			marginBottom: '1.45rem'
		}}>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem'
			}}>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}>
					<center>ICO.SHILL</center>
				</Link>
			</h1>
		</div>
	</div>
);

const TemplateWrapper = ({ children }) => (
	<Layout>
		<Helmet
			title="Home of all your ICO needs"
			meta={[
				{
					name: 'description',
					content: 'Learn about top performing ICOs today!'
				},
				{ name: 'keywords', content: 'Intial Coin Offerings' }
			]}
		/>
		<Header />
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0
			}}>
			{children()}
		</div>
		<Footer style={{ textAlign: 'center' }}>
			<strong>JAM Designs</strong> ©2018 Created by{' '}
			<strong>Daniel Snell</strong>
		</Footer>
	</Layout>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;
