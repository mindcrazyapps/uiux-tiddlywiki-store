# API & Settings
*api*
```html
<script src="https://unpkg.com/htmx.org@1.8.5/dist/htmx.min.js"></script>
<!-- have a button POST a click via AJAX -->
<div hx-{get|post}="https://tiddlywiki-store.netlify.app/api/{send|get}/{databaseName|serviceDatabase|}/{first|latest|all|list|view}" hx-value={obj|json|xml|html|txt} hx-swap="outerHTML">
</div>
```
