const PROXY_CONFIG = [
  {
    context: ['/api/houses'],
    target: 'https://anapioficeandfire.com',
    secure: true,
    changeOrigin: true,
    logLevel: 'debug',
    autoRewrite: true
  }
]

module.exports = PROXY_CONFIG;