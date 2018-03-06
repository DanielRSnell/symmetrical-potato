module.exports = {
	siteMetadata: {
		title: `Gatsby with GraphCMS`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-graphcms`,
			options: {
				endpoint: `https://api.graph.cool/simple/v1/cjazynkxt0xkj01926xxwnp9m`,
				query: `{
      	allIcoProfiles(first: 900) {
						id
	          name
	          logo
	          desc
	          about
	          tagline
	          intro
	          rating
						ratingTeam
	          ratingVision
	          ratingProfile
	          ratingProduct
	          url
	          country
	          prestart
	          preend
	          start
	          end
	          icoid
          icoCategories {
            id
            name
          }
					milestones {
						id
						title
						content
					}
					icoExchanges {
            id
            logo
            price
            roi
            name
          }
					icoFinance {
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
					icoLinks {
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
					icoRatings {
            agree
            date
            name
            photo
            review
            product
            profile
            team
            title
            vision
            weight
          }
			  }
      }`
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Gatsby with GraphCMS',
				short_name: 'Gatsby GCMS',
				start_url: '/',
				background_color: '#F0F2F5',
				theme_color: '#001529',
				display: 'minimal-ui',
				icons: [
					{
						src: `/favicons/chrome-192.png`,
						sizes: `192x192`,
						type: `image/png`
					},
					{
						src: `/favicons/chrome-512.png`,
						sizes: `512x512`,
						type: `image/png`
					}
				]
			}
		},
		`gatsby-plugin-offline`,
		'gatsby-plugin-antd'
	]
};
