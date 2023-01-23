import Link from 'next/link'
import React, { useState } from 'react'
import GitHubButton from 'react-github-button'
import * as Icon from 'react-feather'
import '../styles/globals.css'
import TiddlywikiStorage from './components/choose_storage'

function MyApp({ Component, pageProps }) {
  const [tab, setTab] = useState(1)
  return (
    <>
      <header>
        <Link href="/" as="/">
          <a className="logo" style={{ color: 'blue' }}>
            <Icon.Database />
            tiddlywiki-storage
          </a>
        </Link>
        <nav>
          <a
            href="https://github.com/mindcrazyapps/tiddlywiki-storage/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            <Icon.AlertCircle /> Report Bug
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
        <TiddlywikiStorage />
      </main>
      <div hx-target="this" hx-swap="outerHTML">
        <div><label>First Name</label>: Joe</div>
        <div><label>Last Name</label>: Blow</div>
        <div><label>Email</label>: joe@blow.com</div>
        <button hx-get="/contact/1/edit" className="btn btn-primary">
          Click To Edit
        </button>
      </div>
    </>
  )
}

export default MyApp
