import React from 'react'
import PreviewComponent from 'components/preview_component'
import TiddlywikiStorage from 'components/kit/choose_storage/TiddlywikiStorage'
import Config from 'libs/config'

const ConnectWalletComponents = () => {
  return (
    <div>
      <PreviewComponent
        Component={TiddlywikiStorage}
        name=""
        preview={'/previews/example1.png'}
        source={`${Config.raw_component}choose_asset/Example1.tsx`}
      />
    </div>
  )
}

export default ConnectWalletComponents
