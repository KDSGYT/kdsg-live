
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/celvin/Desktop/new folder/kdsg-live/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/celvin/Desktop/new folder/kdsg-live/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/celvin/Desktop/new folder/kdsg-live/src/pages/page-2.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/celvin/Desktop/new folder/kdsg-live/src/pages/using-typescript.tsx"))
}

