import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('src/public'))

io.on('connection', (socket) => {
  socket.on('chat message', (message) => {
    const messageAuhor = socket.id
    const messageTimestamp = new Date()
    io.emit('chat message', { messageAuhor, messageTimestamp, message })
  })

  socket.on('user typing', () => {
    const socketID = socket.id
    io.emit('user typing', socketID)
  })
})

server.listen(3000, () => {
  console.log('listening on 3000')
})
