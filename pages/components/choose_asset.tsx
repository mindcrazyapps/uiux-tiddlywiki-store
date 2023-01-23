import React from 'react';
import PreviewComponent from 'components/preview_component';
import Example1 from 'components/kit/choose_asset/Example1';
import Config from 'libs/config';

const ConnectWalletComponents = () => {
	return (
			<div>
				<PreviewComponent
					Component={Example1}
					preview={'/previews/choose_asset/example1.png'}
					source={`${Config.raw_component}choose_asset/Example1.tsx`}
				/>
			</div>
	);
};

export default ConnectWalletComponents;
