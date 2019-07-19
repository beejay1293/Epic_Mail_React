import React, { Component } from 'react';
import SingleMessage from './SingleMessage';
import { messages, fetchSpecificMessage } from '../../actions'
import { connect } from 'react-redux';

export class MessageBody extends Component {
 state = {
   messages: []
 }
  render() {
    
    const styles = 'msg';
    if(this.props.Dashboardstate === 'Inbox'){
      this.state.messages = this.props.inbox 
    }else if(this.props.Dashboardstate === 'sent'){
     this.state.messages = this.props.sent
    } else if(this.props.Dashboardstate === 'unread'){
      this.state.messages = this.props.unread
    }
    return (
      <ul className="inbox__body">
        {this.state.messages.map(msg => (
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
const mapDispatchToProps = {
    getMessage: (id) => fetchSpecificMessage(id)
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

