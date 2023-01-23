const PreviewComponent = ({ Component, preview }) => {
  return (
    <>
    <Component />
    <img className="preview_image" src={preview} width="100%" height="100%" />
    </>
  )
}

export default PreviewComponent