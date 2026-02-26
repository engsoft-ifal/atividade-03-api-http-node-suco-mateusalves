import http from 'http'
import { chamadoRoutes } from './routes/chamadoRoutes.js'

const PORT = 3000

const server = http.createServer((req, res) => {

  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify({ status: 'ativo' }))
  }

  chamadoRoutes(req, res)
})

server.listen(PORT, () => {
  console.log('Servidor rodando na porta 3000')
})

