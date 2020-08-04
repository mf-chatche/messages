import React from 'react'
import { connect } from 'react-firebase'

import styles from './styles.module.css'

const MessageList = ({ messages, loggedUser }) => {
  function iAmTheSender(sender) {
    return sender.id === loggedUser.id
  }

  function renderSenderName(sender) {
    if(!iAmTheSender(sender)) {
      return <div className={styles.sender}>{sender.name}</div>
    }
  }

  function mountMessageClass(sender) {
    return iAmTheSender(sender) ? 
      `${styles.message} ${styles.myMessage}` : 
      styles.message
  }

  function renderMessage({ sender, content }, key) {
    return (
      <li key={key} className={mountMessageClass(sender)}>
        { renderSenderName(sender) }

        {content}
      </li>
    )
  }

  function renderMessages() {
    if(!!messages) {
      return messages.map(renderMessage)
    }
  }

  return (
    <ul className={styles.list}>
      { renderMessages() }
    </ul>
  )
}

export default connect((props, ref) => ({
  messages: 'messages'
}))(MessageList)
