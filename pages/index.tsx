import Head from 'next/head';

/*
import Link from 'next/link';
const Categories = [
	{
		name: 'tiddlywiki-storage',
		path: '/components/choose_asset',
		items: 2,
		preview: '/category_preview/choose_asset.png',
	},
];
*/

export default function Home() {
	return (
		<div>
			<Head>
			    <title>tiddlywiki-storage</title>
				<meta name="description" content="tiddlywiki-storage by mindcrazyapps" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	);
}
