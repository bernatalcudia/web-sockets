let socket = io()

const inputMessage = document.getElementById('inputMessage')
const sendButton = document.getElementById('sendButton')

const handleInput = () => {
    const inputValue = inputMessage.value
    console.log(inputValue)
}

sendButton.addEventListener('click', handleInput)