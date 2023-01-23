import React from 'react'
import PreviewComponent from 'components/preview_component'
import TiddlywikiStorage from 'components/kit/choose_storage/TiddlywikiStorage'

const ConnectWalletComponents = () => {
  return (
    <div>
      <PreviewComponent
        Component={TiddlywikiStorage}
        preview={'/previews/img2.png'}
      />
    </div>
  )
}

export default ConnectWalletComponents
