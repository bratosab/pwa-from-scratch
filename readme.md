# PWA From Scratch

## Basic app with caching
1. Scaffold new JS project, using vite for example :
```sh
npm create vite@latest pwa-from-scratch
```
2. Create manifest.json and service-worker.js files.
3. Register service worker.
4. Add a logo to project then generate assets into `./icons` folder using https://github.com/elegantapp/pwa-asset-generator :
```sh
npx pwa-asset-generator logo.png icons
```
6. Copy outputed icons array from terminal into json manifest.
7. Import workbox into our service-worker.js file : https://developer.chrome.com/docs/workbox/modules/workbox-sw/
8. Add caching code into service worker.
9. serve App using `npm run dev` and verify that caching works.

## Add PWA shortcuts
1. In the `manifest.json` file, add `shortcuts: []` array.
2. Add the wanted shortcuts into that array following the example below 
```json
"shortcuts": [
    {
      "name": "New chat",
      "short_name": "Chat",
      "description": "Start a new chat",
      "url": "/chat",
      "icons": [{ "src": "/icons/chat.png", "sizes": "192x192" }]
    },
    // ...
  ]
```

## Add contacts picker
1. Create contact-picker.js file
2. Specify the attributes we want access to in an array :
```js
const attributes = ['name', 'email', 'tel', 'icon']
```
3. Specify selection options, in this case multiple contacts selection :
```js
const options = {multiple: true}
```
4. Add check to know if ContactsManager is supported on device :
```js
const supported = ('contacts' in navigator && 'ContactsManager' in window)
```
5. Write an async function to get the contacts that will verify if the feature is supported then fetch the contacts. The feature only works on https.
6. Import the contact-picker.js file in your `<head>` of the index.html file using a `defer` attribute : 
```html
<script defer src="./contact-picker.js"></script>
```
7. Add the contacts button in your `<body>` : 
```html
<button id="contacts" type="button">Contacts</button>
```