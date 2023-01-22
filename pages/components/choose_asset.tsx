import React from 'react';

import ViewComponents from 'components/view_components';
import PreviewComponent from 'components/preview_component';
import Example1 from 'components/kit/choose_asset/Example1';
import Config from 'libs/config';

const ConnectWalletComponents = () => {
	return (
		<ViewComponents name="tiddlywiki-storage">
			<div>
				<PreviewComponent
					name="tiddlywiki-storage"
					Component={Example1}
					preview={'/previews/choose_asset/example1.png'}
					source={`${Config.raw_component}choose_asset/Example1.tsx`}
				/>
			</div>
		</ViewComponents>
	);
};

export default ConnectWalletComponents;
