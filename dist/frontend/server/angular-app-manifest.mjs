
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
    'index.csr.html': {size: 31962, hash: '2c207ae35684128ccc80f15de28664666ef5ee58d9841eb9ff96e58fa5b5e414', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 32281, hash: '9bc8b3e07623825e65e9c92116e3309e034dfafeaa7ebe90e195c91b67d2c26d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37536, hash: 'c0f93c260233c21b2190ce7324f69d1faab43688bc41b8626f6829adeeda29e0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 37536, hash: 'c0f93c260233c21b2190ce7324f69d1faab43688bc41b8626f6829adeeda29e0', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 37536, hash: 'c0f93c260233c21b2190ce7324f69d1faab43688bc41b8626f6829adeeda29e0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 38038, hash: '8f146a7912aec544500a520b877829e054ed2224fe2560c14e9172d26f2a8d5b', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'article/index.html': {size: 37536, hash: 'c0f93c260233c21b2190ce7324f69d1faab43688bc41b8626f6829adeeda29e0', text: () => import('./assets-chunks/article_index_html.mjs').then(m => m.default)},
    'demo/index.html': {size: 37536, hash: 'c0f93c260233c21b2190ce7324f69d1faab43688bc41b8626f6829adeeda29e0', text: () => import('./assets-chunks/demo_index_html.mjs').then(m => m.default)},
    'styles-IBSUCTEA.css': {size: 75, hash: 'Zgm17UmXW6o', text: () => import('./assets-chunks/styles-IBSUCTEA_css.mjs').then(m => m.default)}
  },
};
