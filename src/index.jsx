/* globals HTMLElement */
import React from 'react'
import ReactDOM from 'react-dom'
import MessageList from './message-list.jsx'
import { initializeApp } from 'firebase'
import { Provider } from 'react-firebase'
import firebaseConfig from './firebase.json'

const firebaseApp = initializeApp(firebaseConfig, 'chatche-messages')

class Messages extends HTMLElement {
  // Observa a mudança de atributos para chamar o método `attributeChangedCallback`
  static get observedAttributes() {
    return ['logged-user']
  }

  attributeChangedCallback() {
    this.render()
  }

  // Callback executado após o componente ser chamado
  connectedCallback() {
    this.render()
  }

  render() {
    const props = {
      loggedUser: JSON.parse(this.getAttribute('logged-user') || null)
    }

    ReactDOM.render(
      <Provider firebaseApp={firebaseApp}>
        <MessageList {...props} />
      </Provider>
    , this)
  }
}

const register = () => {
  window.customElements.define('chatche-messages', Messages)
}

export default {
  register,
  version: '1.0.0'
}
