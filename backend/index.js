const app = require('./app')
const http = require('http')

const server = http.createServer(app)


server.listen(process.env.PORT || 3001, () => {
  console.log('listening 3003');
})
