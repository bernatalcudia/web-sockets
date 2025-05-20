let socket = io('http://localhost:3000');

const inputMessage = document.getElementById('inputMessage')
const sendButton = document.getElementById('sendButton')
const listMessages = document.getElementById('listMessages')

const handleInput = () => {
    const inputValue = inputMessage.value
    socket.emit('message', inputValue)
    inputMessage.value = ''
}

const listenMessages = (message) => {
    listMessages.innerHTML += `
<li>${message}</li>`
}


socket.on('response', listMessages)
sendButton.addEventListener('click', handleInput)