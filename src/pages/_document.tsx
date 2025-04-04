import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="My Frontend Test Assignment" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />

					<meta property="og:title" content="Frontend Test Assignment" />
					<meta property="og:description" content="A simple two-page website with contact form and backend." />
					<meta property="og:type" content="website" />
					<meta property="og:image" content="/og-image.jpg" />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content="Frontend Test Assignment" />
					<meta name="twitter:description" content="A simple two-page website with contact form and backend." />
					<meta name="twitter:image" content="/twitter-image.jpg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
