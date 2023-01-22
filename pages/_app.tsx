import Link from 'next/link';
import GitHubButton from 'react-github-button';
import { AlertCircle, Box, GitHub } from 'react-feather';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<header>
				<Link href="/" as="/">
					<a className="logo">
						<Box />
						tiddlywiki-storage
					</a>
				</Link>
				<nav>
					<a href="https://github.com/Devzstudio/Web3UIKit/issues/new" target="_blank" rel="noreferrer">
						<AlertCircle /> Report bugs
					</a>
					<div className="stargazers">
						<GitHubButton type="stargazers" namespace="devzstudio" repo="Web3UIKit" />
					</div>
				</nav>
			</header>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500&display=swap"
				rel="stylesheet"
			></link>
			<main className="container">
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
