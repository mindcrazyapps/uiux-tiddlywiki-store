<br/>

<p align="center">
 <img src="https://cdn-icons-png.flaticon.com/512/8947/8947740.png" alt="image" width="70px">
</p>

<h5 align="center">Mindcrazyapps.github.io</h5>

<h4 align="center"> Please see this live demo <a href="https://tiddlywiki-store.netlify.app/"> here </a>  and the <a href="https://mindcrazyapps.github.io/tiddlywiki-store/#/"> documentation </a> here </h3>

# <img src="./logo.svg"> tiddlywiki-store

*use case: Select storage for your tiddlywiki with tiddlywiki-store (ui)*
<img src="./screenshot/img2.png" alt="image"/>

*img*
<img src="./screenshot/img1.png" alt="image"/>

## FAQ

#### Get started
```ruby
npm install -g yarn
npm run build
npm run dev # npm run start
```

#### API & Settings
*api*
```html
<script src="https://unpkg.com/htmx.org@1.8.5/dist/htmx.min.js"></script>
<!-- have a button POST a click via AJAX -->
<div hx-{get|post}="https://tiddlywiki-store.netlify.app/api/{send|get}/{databaseName|serviceDatabase|}/{first|latest|all|list|view}" hx-value={obj|json|xml|html|txt} hx-swap="outerHTML">
</div>
```

*settings*

| Type               	| Cookies            	| Local storage 	| Session Storage 	| Web SQL 	| Google Drive     	| Dropbox 	| NocoDB 	| Airtable 	| SeaTable | Grist  	| IndexDB  	| HistoryPush  	|
|--------------------	|--------------------	|---------------	|-----------------	|---------	|------------------	|---------	|---------	|---------	|---------	|--------	|--------	|--------	|
| Capacity           	| 4kb                	| 10mb          	| 5mb             	| add     	| 15GB in freeplan 	| 2GB     	| 2GB     	| 2GB     	| 2GB     	| 2GB    	| 2GB    	|2GB    	|
| Browsers           	| HTML4/HTML5        	| HTML5         	| HTML5           	| HTML4   	| HTML5            	| HTML5   	| HTML5   	| HTML5   	| HTML5    | HTML5   | 2GB    	|2GB    	|
| Accessible from    	| Any Window         	| Any Window    	| Same tab        	| add     	| add              	| add     	| add     	| add     	| add     	| add    	| 2GB    	|2GB    	|
| Expires            	| Manually set       	| Never         	| Manually set    	| add     	| add              	| add     	| add     	| add     	| add     	| add    	| 2GB    	|2GB    	|
| Storage location   	| Browser and server 	| Browser only  	| On tab close    	| add     	| add              	| add     	| add     	| add     	| add     	| add    	| 2GB    	|2GB    	|
| API?               	| No                 	| No            	| No              	| No      	| No               	| No      	| add     	| add     	| add     	| add    	| 2GB    	|2GB    	|
| Sent with requests 	| Yes                	| No            	| No              	| No      	| Yes              	| Yes     	| Yes     	| Yes     	| Yes     	| Yes    	|Yes    	|Yes    	|

#### Why use tiddlywiki-store?
One of tiddlywiki's problems is the choice of storage - there are several plugins and settings. tiddlywiki-store centralizes all storage decisions for the developer, user or business model into something easy and usable.

#### But... so... why use tiddlywiki-store?
Because... it's a great option for setting up your tiddlywiki locally, remotely or on a network.

#### How was made tiddlywiki-store?
tiddlywiki-store is based from [Web3 UI Kit](https://github.com/devzstudio/Web3UIKit/)(Opensource Web3 UI Components using ReactJs, Styled Components) and [remotestorage-widget](https://github.com/remotestorage/remotestorage-widget), [unhosted](https://unhosted.org/apps/), [self-hosted](https://selfhosted.show/), [nullboard](https://nullboard.io/preview). 

#### How does tiddlywiki-store work? What tiddlywiki-store does?
tiddlywiki-store works like an ["odbc"](https://learn.microsoft.com/en-us/sql/odbc/reference/what-is-odbc?view=sql-server-ver16) - a plugin that connects different storage services, network protocols, apis.

#### What network protocols, apis, storage services - tiddlywiki-store have?
- Network protocols: SFTP, Git, FTP, SSH, IPFS, SMDB.
- Browser storage: Local-Storage, Session-Storage, Cookie, IndexedDB, FileSystem and WebSQL.
- Api&Storage Services: Gitlab, GitHub, Dropbox, Google Drive, Fission, Tiddlywiki Host, Orbit-db, SQLite, SQLServer, MySQL, MariaDB, MONGODB, Baserow, Seatable, Airtable, NocoDB and Filesystem Local.

#### use cases?
- alternative remote-storage
- tiddlywiki
- unhosted-apps
- self-hosted apps
- no-backend apps
- nocode apps
- lowcode apps
- spa apps
- mpa apps
- pwa apps
- sg(site generate) apps
- dga(documentation generate site) apps
- etc

## Contributors

<a href="https://github.com/mindcrazyapps/tiddlywiki-store/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mindcrazyapps/tiddlywiki-store" />
</a>

## License
This code is licensed under the MIT license.
