import useOnClickOutside from 'hooks/useOnClickoutside';
import React, { useRef } from 'react';
import styled from 'styled-components';
/*import { Database } from 'react-feather';*/
import * as Icon from 'react-feather';

const ModalOverlay = styled.div`
	background: hsla(0, 0%, 100%, 0.01) !important;
	backdrop-filter: blur(10px);
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	transform-origin: center center;
`;

const ModalConent = styled.div`
	position: absolute;
	top: 40%;
	right: 50%;
	transform: translate(50%, -50%);
	padding: 1rem;
	background-color: #fff;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	width: 500px;
	max-width: 400px;
	border-radius: 0.375rem;
	border: 1px solid #e2e4e8;

	h3 {
		margin: 0.25rem 0;
		color: #374151;
	}

	.close {
		cursor: pointer;
		color: #9ca3af;
		&:hover {
			color: #111827;
		}
	}
	@media only screen and (max-width: 600px) {
		width: 98%;
		margin-left: 1%;
		padding-bottom: 2%;
		max-width: inherit;
		transform: unset;
		left: 0;
		right: 0;
		bottom: 0px;
	}
`;

/*background-color: #3b82f6; color: "#fff"; */
const ChooseAssets = styled.button`
	padding: 0.5rem 1rem;
	background-color: transparent; 
	font-size: 1rem;
	line-height: 1.5rem;
	border-radius: 0.25rem;
	cursor: pointer;
	border: 0;
	color: black;

	&:hover {
		background: transparent;
	}
`;

//  &:hover -> #2563eb;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 0.5rem;
	margin-bottom: 1rem;
`;

const ChooseAsset = styled.button`
	text-transform: capitalize;
	width: 100%;
	cursor: pointer;
	border: 1px solid #d1d5db;
	color: #4B5563;
	font-size: 1rem;
	border-radius: 0.375rem;
	margin-top: 0.50rem;
	background-color: #F3F4F6;
	position relative;
	text-align:left;

    display: flex;
    align-items: center;
    padding: 0.50rem;

	img {
		position relative;
		bottom:0;
		right:0;
		margin-right: 0.5rem;
	}

	&:hover {
		color: #111827;
		border-color: #3B82F6;
	}
`;

const AssetSearchWrapper = styled.div`
	position: relative;
	margin-bottom: 0.5rem;

	.search_icon {
		position: absolute;
		top: 12px;
		left: 15px;
		color: #868c97;
	}
`;

const AssetSearch = styled.input`
	border: 0px;
	padding: 1rem 3.5rem;
	border-radius: 0.25rem;
	width: 100%;
	font-size: 1rem;
	background-color: #fff;
	border: 1px solid #e2e4e8;

	&:focus {
		background: #fff;
	}
`;

const AssetWrapper = styled.div`
	height: 40vh;
	overflow-y: scroll;

	@media only screen and (max-width: 600px) {
		height: 50vh;
	}
`;

// Multi sync for tiddlywiki-storage
const OptionsSync = [
	{
		name: 'FTP',
	},
	{
		name: 'Hypercore',
	},
	{
		name: 'SFTP',
	},
	{
		name: 'SSH',
	},
	{
		name: 'Bluetooth',
	},
	{
		name: 'SMB',
	},
	{
		name: 'Google Drive',
	},
	{
		name: 'Dropbox',
	},
	{
		name: 'Remote-storage',
	},
	{
		name: 'Remote-storage with sync in Google Drive',
	},
	{
		name: 'Remote-storage with sync in Dropbox',
	},
	{
		name: 'Tiddlywiki host',
	},
	{
		name: 'GitHub',
	},
	{
		name: 'Medium',
	},
	{
		name: 'Gitlab',
	},
	{
		name: 'Microsoft Access',
	},
	{
		name: 'SQLite',
	},
	{
		name: 'Postgres SQL',
	},
	{
		name: 'MongoDB',
	},
	{
		name: 'Couchdb',
	},
	{
		name: 'SQL Server',
	},
	{
		name: 'Local',
	},
	{
		name: 'Localstorage',
	},
	{
		name: 'Cookies',
	},
	{
		name: 'WebSQL',
	},
	{
		name: '5apps',
	},
	{
		name: 'Discourse',
	},
	{
		name: 'Microsoft Excel',
	},
	{
		name: 'Google Spreadsheets',
	},
	{
		name: 'Airtable',
	},
	{
		name: 'Baserow',
	},
	{
		name: 'Nocodb',
	},
	{
		name: 'Seatable',
	},
	{
		name: 'Grist',
	},
	{
		name: 'Codeberg',
	},
	{
		name: 'Bitbucket',
	},
	{
		name: 'SessionStorage',
	},
	{
		name: 'File access',
	},
	{
		name: 'Orbit-db',
	},
	{
		name: 'IPFS',
	},
	{
		name: 'IndexerDB',
		image: '',
	},
	{
		name: 'One Drive',
	},
	{
		name: 'Meganzco',
	},
	{
		name: 'Device',
	},
	{
		name: 'WebDAV',
	},
	{
		name: 'Sharepoint',
	},
	{
		name: 'Firebase',
	},
	{
		name: 'Back4App',
	},
	{
		name: 'Goormide',
	},
	{
		name: 'MySQL',
	},
	{
		name: 'Mariadb',
	},
];

const Example1 = () => {
	const [term, setTerm] = React.useState('');
	const [showModal, setShowModal] = React.useState(false);
	const modalRef = useRef();
	useOnClickOutside(modalRef, () => setShowModal(false));

	return (
		<div>
			<ChooseAssets onClick={() => setShowModal(true)}> <Icon.Database style={{"color":"black;"}}/> </ChooseAssets>

			{showModal && (
				<ModalOverlay>
					<ModalConent ref={modalRef}>
						<ModalHeader>
							<h3>choose storage</h3>
							<div className="close" onClick={() => setShowModal(false)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</div>
						</ModalHeader>

						<AssetSearchWrapper>
							<AssetSearch
								onChange={(e) => setTerm(e.target.value)}
								value={term}
								type="search"
								placeholder="Search storage for tiddlywiki"
							/>
						</AssetSearchWrapper>
						<AssetWrapper>
							{OptionsSync.map((wallet, index) => (
								<ChooseAsset key={index}>
									{/* <img src={wallet.image} width="25px" height="25px" /> <img src="https://cdn-icons-png.flaticon.com/512/1819/1819725.png" width="25px" height="25px" /> */}
									{wallet.name}
								</ChooseAsset>
							))}
						</AssetWrapper>
					</ModalConent>
				</ModalOverlay>
			)}
		</div>
	);
};

export default Example1;
