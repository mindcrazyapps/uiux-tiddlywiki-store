import Head from 'next/head'

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>tiddlywiki-store</title>
        <meta
          name="description"
          content="tiddlywiki-store by nextexperience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/static/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180"  href="/static/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon.ico"/>
        <link rel="icon" type="image/png" sizes="16x16"  href="/static/favicon.ico"/>
        {/* <link rel="manifest" href="/site.webmanifest"/> */}
        <link rel="mask-icon" href="/static/favicon.ico" color="#5bbad5"/>
	      <meta name="theme-color" content="#ffffff"/>
      </Head>
    </div>
    </>
  )
}