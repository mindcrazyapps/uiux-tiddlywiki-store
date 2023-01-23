import Head from 'next/head'
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>tiddlywiki-storage</title>
        <meta
          name="description"
          content="tiddlywiki-storage by mindcrazyapps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
