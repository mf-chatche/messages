import React from 'react'
import ReactDOM from 'react-dom'
import messages from '@chatche/messages'

messages.register()

ReactDOM.render(<chatche-messages />, document.getElementById('root'))
