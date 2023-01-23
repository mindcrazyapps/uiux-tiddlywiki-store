import SourceCode from 'components/source_code'
import React, { useState } from 'react'
import { Code, Eye, Image } from 'react-feather'
import { useRouter } from "next/router";
import Link from "next/link";

const PreviewComponent = ({ Component, preview, name, source }) => {
  const [tab, setTab] = useState(1)
  const router = useRouter();
  const handleClick = (e, path) => {
    if (path === "#/preview") {
      setTab(1);
    }
    if (path === "#/demo") {
      setTab(2);
    }
    if (path === "#/source-code") {
      setTab(3);
    }
  };
  return (
    <div className="tab_container">
      <div className="tab-header">
        <div className="tabs">
          <button onClick={(e) => handleClick(e, "#/preview")}>
            <Image />
            Preview
          </button>
          <button onClick={(e) => handleClick(e, "#/demo")}>
            <Eye />
            Demo
          </button>
          <button onClick={(e) => handleClick(e, "#/source-code")}>
            <Code />
            Source-code
          </button>
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

<Link href="/">
<a onClick={(e) => handleClick(e, "/about")}>About</a>
</Link>{" "}
<Link href="/">
<a onClick={(e) => handleClick(e, "/posts")}>Posts</a>
</Link>

export default PreviewComponent
