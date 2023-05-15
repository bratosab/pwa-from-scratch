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

