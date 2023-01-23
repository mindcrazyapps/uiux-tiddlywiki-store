import Link from 'next/link';
import GitHubButton from 'react-github-button';
import { AlertCircle, Database } from 'react-feather';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<header>
				<Link href="/components/choose_asset" as="/components/choose_asset">
					<a className="logo">
						<Database />
						tiddlywiki-storages
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
