import http from 'http'

const server = http.createServer(() => {})

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})

if (req.method === 'GET' && req.url === '/health') {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  return res.end(JSON.stringify({ status: 'ativo' }))
}
