
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/demo"
  },
  {
    "renderMode": 2,
    "route": "/article"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 31962, hash: 'b24d30baa6f090f0cb4c36d2bc53c11d84a712699b58bff19cec584ed9609aa3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 32281, hash: 'eb10bae6b37cdc28239adc24657769b147a6dc4361143b8edd659937380b8e1a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 37536, hash: 'cd61870dfea3d082111687c78e23fe08b155ee1c143e8d868e5e5b6ea0a5aa72', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'demo/index.html': {size: 37536, hash: 'cd61870dfea3d082111687c78e23fe08b155ee1c143e8d868e5e5b6ea0a5aa72', text: () => import('./assets-chunks/demo_index_html.mjs').then(m => m.default)},
    'index.html': {size: 37536, hash: 'cd61870dfea3d082111687c78e23fe08b155ee1c143e8d868e5e5b6ea0a5aa72', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 37536, hash: 'cd61870dfea3d082111687c78e23fe08b155ee1c143e8d868e5e5b6ea0a5aa72', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 38038, hash: '75e91708c025d6a8173a1ff74d0af7143f6bdfb33abf331c280c4ba0e5f7bcad', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'article/index.html': {size: 37536, hash: 'cd61870dfea3d082111687c78e23fe08b155ee1c143e8d868e5e5b6ea0a5aa72', text: () => import('./assets-chunks/article_index_html.mjs').then(m => m.default)},
    'styles-IBSUCTEA.css': {size: 75, hash: 'Zgm17UmXW6o', text: () => import('./assets-chunks/styles-IBSUCTEA_css.mjs').then(m => m.default)}
  },
};
