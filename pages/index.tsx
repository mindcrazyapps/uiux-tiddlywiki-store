import Head from 'next/head';
import Link from 'next/link';

const Categories = [
	{
		name: 'Choose Asset',
		path: '/components/choose_asset',
		items: 2,
		preview: '/category_preview/choose_asset.png',
	},
];

export default function Home() {
	return (
		<div>
			<Head>
				<title>tiddlywiki-storage</title>
				<meta name="description" content="tiddlywiki-storage by mindcrazyapps" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="categories">
				{Categories.map((category, index) => (
					<Link key={index} href={category.path} as={category.path}>
						<a className="preview_card">
							<img src={category.preview} alt={category.name} width="250px" height="250px" />
							<div className="details">
								<h3>{category.name}</h3>
								<p>{category.items} components</p>
							</div>
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}
