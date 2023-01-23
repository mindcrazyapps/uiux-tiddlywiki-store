import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import GitHubButton from 'react-github-button'
import { AlertCircle } from 'react-feather'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [tab, setTab] = useState(1)
  return (
    <>
      <header>
        <Link href="/components/choose_storage" as="/components/choose_storage">
          <a className="logo" style={{ color: 'blue' }}>
            <Image src="./static/favicon.ico" width="40px" height="40px" />
            storage
          </a>
        </Link>
        <nav>
          <a
            href="https://github.com/mindcrazyapps/tiddlywiki-storage/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            <AlertCircle /> Report bugs
          </a>
          <div className="stargazers">
            <GitHubButton
              type="stargazers"
              namespace="Devzstudio"
              repo="Web3UIKit"
            />
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
  )
}

export default MyApp
