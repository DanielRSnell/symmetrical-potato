const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		const blogPost = path.resolve('./src/templates/blog-post.js');
		resolve(
			graphql(
				`
					{
						ico: allIcoProfiles {
							edges {
								node {
									name
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}
				// Create pages for each markdown file.
				result.data.ico.edges.forEach(({ node }) => {
					const path = node.name
						.toLowerCase()
						.replace(/ /g, '-')
						.replace(/\./g, '-');
					const slug = node.name
						.toLowerCase()
						.replace(/ /g, '-')
						.replace(/\./g, '-');
					const page_name = node.name;
					createPage({
						path,
						component: blogPost,
						// If you have a layout component at src/layouts/blog-layout.js
						// layout: `blog-layout`,
						// In your blog post template's graphql query, you can use path
						// as a GraphQL variable to query for data from the markdown file.
						context: {
							slug,
							page_name
						}
					});
				});
			})
		);
	});
};
