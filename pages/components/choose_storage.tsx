import React from 'react';
import PreviewComponent from 'components/preview_component';
import Example1 from 'components/kit/choose_storage/Example1';
import Config from 'libs/config';

const ConnectWalletComponents = () => {
	return (
			<div>
				<PreviewComponent
					Component={Example1}
					name=""
					preview={'/previews/choose_storage/example1.png'}
					source={`${Config.raw_component}choose_asset/Example1.tsx`}
				/>
			</div>
	);
};

export default ConnectWalletComponents;
