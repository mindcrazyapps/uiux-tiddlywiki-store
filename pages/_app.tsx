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
						<svg width="22pt" height="22pt" class="tc-image-save-button tc-image-button" viewBox="0 0 128 128"><path fill-rule="evenodd" d="M120.783 34.33c4.641 8.862 7.266 18.948 7.266 29.646 0 35.347-28.653 64-64 64-35.346 0-64-28.653-64-64 0-35.346 28.654-64 64-64 18.808 0 35.72 8.113 47.43 21.03l2.68-2.68c3.13-3.13 8.197-3.132 11.321-.008 3.118 3.118 3.121 8.193-.007 11.32l-4.69 4.691zm-12.058 12.058a47.876 47.876 0 013.324 17.588c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48c14.39 0 27.3 6.332 36.098 16.362L58.941 73.544 41.976 56.578c-3.127-3.127-8.201-3.123-11.32-.005-3.123 3.124-3.119 8.194.006 11.319l22.617 22.617a7.992 7.992 0 005.659 2.347c2.05 0 4.101-.783 5.667-2.349l44.12-44.12z"></path></svg>
						tiddlywiki-storage
					</a>
				</Link>
				<nav>
					<a href="https://github.com/mindcrazyapps/tiddlywiki-storage/issues/new" target="_blank" rel="noreferrer">
						<AlertCircle /> Report bugs
					</a>
					<div className="stargazers">
						<GitHubButton type="stargazers" namespace="mindcrazyapps" repo="tiddlywiki-storage" />
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
