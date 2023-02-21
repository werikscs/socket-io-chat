import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const messagesArray: {
  messageAuhor: string
  messageDate: Date
  message: any
}[] = []

app.use(express.static('src/public'))

io.on('connection', (socket) => {
  socket.broadcast.emit('user-connected', socket.id)

  socket.emit('load-prev-messages', messagesArray)

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', socket.id)
  })

  socket.on('chat message', (message) => {
    const messageAuhor = socket.id
    const messageDate = new Date()
    const messageObj = { messageAuhor, messageDate, message }
    messagesArray.push(messageObj)
    io.emit('chat message', { ...messageObj })
  })

  socket.on('user typing', () => {
    const socketID = socket.id
    io.emit('user typing', socketID)
  })
})

server.listen(3000, () => {
  console.log('listening on 3000')
})
