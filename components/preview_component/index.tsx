import SourceCode from 'components/source_code'
const PreviewComponent = ({ Component, preview, source }) => {
  return (
    <>
    <img className="preview_image" src={preview} width="100%" height="100%" />
    <Component />
    <SourceCode source={source} />
    </>
  )
}

export default PreviewComponent

/*

  const router = useRouter();

  const [tab, setTab] = useState(1)

  const handleClick = (e, path) => {
    if (path === "#/preview") {
      return <img className="preview_image" src={preview} width="100%" height="100%" />
    }
    if (path === "#/demo") {
      return <Component />
    }
    if (path === "#/source-code") {
      return <SourceCode source={source} />
    }
  };

  <>
    <Component />
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
    </>
*/