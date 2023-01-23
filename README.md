<br/>

<p align="center">
 <img src="https://cdn-icons-png.flaticon.com/512/8947/8947740.png" alt="image" width="70px">
</p>

<h4 align="center"> Mindcrazyapps.github.io </h3>

<h3 align="right"> Please see this live demo <a href="https://tiddlywiki-storage.netlify.app/"> here </a> </h3>

# <img src="./logo.svg"> tiddlywiki-storage
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

#### API
```html
<script src="https://unpkg.com/htmx.org@1.8.5"></script>
<!-- have a button POST a click via AJAX -->
<button hx-post="/clicked" hx-swap="outerHTML">
  Click Me
</button>
```

#### Settings
| Type               	| Cookies            	| Local storage 	| Session Storage 	| Web SQL 	| Google Drive     	| Dropbox 	| NocoDB 	| Airtable 	| SeaTable 	| Grist 	|
|--------------------	|--------------------	|---------------	|-----------------	|---------	|------------------	|---------	|---------	|---------	|---------	|---------	|
| Capacity           	| 4kb                	| 10mb          	| 5mb             	| add     	| 15GB in freeplan 	| 2GB     	| 2GB     	| 2GB     	| 2GB     	| 2GB     	|
| Browsers           	| HTML4/HTML5        	| HTML5         	| HTML5           	| HTML4   	| HTML5            	| HTML5   	| HTML5   	| HTML5   	| HTML5    | HTML5    |
| Accessible from    	| Any Window         	| Any Window    	| Same tab        	| add     	| add              	| add     	| add     	| add     	| add     	| add     	|
| Expires            	| Manually set       	| Never         	| Manually set    	| add     	| add              	| add     	| add     	| add     	| add     	| add     	|
| Storage location   	| Browser and server 	| Browser only  	| On tab close    	| add     	| add              	| add     	| add     	| add     	| add     	| add     	|
| API?               	| No                 	| No            	| No              	| No      	| No               	| No      	| add     	| add     	| add     	| add     	|
| Sent with requests 	| Yes                	| No            	| No              	| No      	| Yes              	| Yes     	| Yes     	| Yes     	| Yes     	| Yes     	|

#### Why use tiddlywiki-storage?
One of tiddlywiki's problems is the choice of storage - there are several plugins and settings. tiddlywiki-storage centralizes all storage decisions for the developer, user or business model into something easy and usable.

#### But... so... why use tiddlywiki-storage?
Because... it's a great option for setting up your tiddlywiki locally, remotely or on a network.

#### How was made tiddlywiki-storage?
tiddlywiki-storage is based from [Web3 UI Kit](https://github.com/devzstudio/Web3UIKit/)(Opensource Web3 UI Components using ReactJs, Styled Components) and [remotestorage-widget](https://github.com/remotestorage/remotestorage-widget), [unhosted](https://unhosted.org/apps/), [self-hosted](https://selfhosted.show/), [nullboard](https://nullboard.io/preview). 

#### How does tiddlywiki-storage work? What tiddlywiki-storage does?
tiddlywiki-storage works like an ["odbc"](https://learn.microsoft.com/en-us/sql/odbc/reference/what-is-odbc?view=sql-server-ver16) - a plugin that connects different storage services, network protocols, apis.

#### What network protocols, apis, storage services - tiddlywiki-storage have?
- Network protocols: SFTP, Git, FTP, SSH, IPFS, SMDB.
- Browser storage: Local-Storage, Session-Storage, Cookie, IndexedDB, FileSystem and WebSQL.
- Api&Storage Services: Gitlab, GitHub, Dropbox, Google Drive, Fission, Tiddlywiki Host, Orbit-db, SQLite, SQLServer, MySQL, MariaDB, MONGODB, Baserow, Seatable, Airtable, NocoDB and Filesystem Local.

## Contributors

<a href="https://github.com/mindcrazyapps/tiddlywiki-storage/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mindcrazyapps/tiddlywiki-storage" />
</a>

## License
This code is licensed under the MIT license.
