import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tiddlywiki-storage</title>
        <meta
          name="description"
          content="tiddlywiki-storage by mindcrazyapps"
        />
        <link rel="icon" href="/static/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon.ico">
	      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon.ico">
	      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.ico">
	      <link rel="manifest" href="/site.webmanifest">
	      <link rel="mask-icon" href="/static/favicon.ico" color="#5bbad5">
	      <meta name="msapplication-TileColor" content="#da532c">
	      <meta name="theme-color" content="#ffffff">
      </Head>
    </div>
  )
}
