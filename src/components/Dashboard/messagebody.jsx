import React, { Component } from 'react';
import SingleMessage from './SingleMessage';
import { messages } from '../../actions'
import { connect } from 'react-redux';

class MessageBody extends Component {

  render() {
    let messages;
    const styles = 'inbox__message';
    if(this.props.Dashboardstate === 'Inbox'){
      messages = this.props.inbox
      console.log('this................', messages);
      
    }else if(this.props.Dashboardstate === 'sent'){
      messages = this.props.sent
    } else if(this.props.Dashboardstate === 'unread'){
      messages = this.props.unread
    }
    return (
      <ul className="inbox__body">
        {messages.map(msg => (
          <SingleMessage
            style={styles}
            name= {msg.sender || msg.receiver}
            messages={msg.message}
            time={msg.createdon}
            key={msg.id}
          />
        ))}

      </ul>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.messages.isAuthenticated,
  inbox: state.messages.inbox,
  sent: state.messages.sent,
  unread: state.messages.unread,
  Dashboardstate: state.messages.dashboardstate,
  errors: state.messages.errors
})

export default connect(mapStateToProps, { messages })(MessageBody);

