const app = require('./app')
const http = require('http')

const server = http.createServer(app)

let PORT = 3003

server.listen(PORT || 3003, () => {
  console.log('listening 3003');
})
