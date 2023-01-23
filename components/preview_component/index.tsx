import SourceCode from 'components/source_code'
import React, { useState } from 'react'
import Link from "next/link";
import { Code, Eye, Image } from 'react-feather'
import { useRouter } from "next/router";

const PreviewComponent = ({ Component, preview, name, source }) => {
  const [tab, setTab] = useState(1)
  const router = useRouter();
  const handleClick = (e, path) => {
    if (path === "#/preview") {
      return <img className="preview_image" src={preview} width="100%" height="100%"/>
    }
    if (path === "#/demo") {
      return <Component />
    }
    if (path === "#/source-code") {
      return <SourceCode source={source} />
    }
  };
  return (
    <div className="tab_container">
      <div className="tab-header">
        <div className="tabs">
          <Link href="/">
            <Image />
            <a onClick={(e) => handleClick(e, "#/preview")} hx-post="/clicked" hx-swap="outerHTML">Preview</a>
          </Link>
          <Link href="/">
            <Eye />
            <a onClick={(e) => handleClick(e, "#/demo")} hx-post="/clicked" hx-swap="outerHTML">Demo</a>
          </Link>
          <Link href="/">
            <Code />
            <a onClick={(e) => handleClick(e, "#/source-code")} hx-post="/clicked" hx-swap="outerHTML">Source-code</a>
          </Link>
        </div>
      </div>
      {tab === 1 && (
        <img
          className="preview_image"
          src={preview}
          width="100%"
          height="100%"
        />
      )}
      {tab === 2 && <Component />}
      {tab === 3 && <SourceCode source={source} />}
    </div>
  )
}

export default PreviewComponent