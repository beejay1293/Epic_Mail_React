import React, { Component } from 'react';
import SingleMessage from './SingleMessage';
import { messages, fetchSpecificMessage } from '../../actions'
import { connect } from 'react-redux';

class MessageBody extends Component {

  render() {
    let messages;
    const styles = 'msg';
    if(this.props.Dashboardstate === 'Inbox'){
      messages = this.props.inbox
      
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
            click={(id) => this.props.getMessage(msg.id)}
          />
        ))}

      </ul>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getMessage: (id) => dispatch(fetchSpecificMessage(id))
  }
}




const mapStateToProps = state => ({
  isAuthenticated: state.messages.isAuthenticated,
  inbox: state.messages.inbox,
  sent: state.messages.sent,
  unread: state.messages.unread,
  Dashboardstate: state.messages.dashboardstate,
  errors: state.messages.errors,
  specificMessage: state.messages.specificMessage,
  body: state.messages.body
})

export default connect(mapStateToProps, mapDispatchToProps)(MessageBody);

