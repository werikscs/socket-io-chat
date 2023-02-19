import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('src/public'))

io.on('connection', (socket) => {
  console.log('user connected: ')
  socket.on('chat message', (msg) => {
    console.log('message', msg)
    io.emit('chat message', msg)
  })
})

server.listen(3000, () => {
  console.log('listening on 3000')
})
