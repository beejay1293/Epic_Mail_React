import React, { Component } from 'react';
import moment from 'moment'
import SingleMessage from './SingleMessage';
import { messages, fetchSpecificMessage, deleteSpecificMessage } from '../../actions'
import { connect } from 'react-redux';

export class MessageBody extends Component {
 state = {
   messages: []
 }

 async handleDelete(id){
  await this.props.delMessage(id)
  await this.props.message('')
  await this.props.message('sent')
  await this.props.message('unread')
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
        {this.state.messages.length === 0 ? <li className="empty"> <h1>No {this.props.Dashboardstate} messages </h1> </li> : this.state.messages.map(msg => (
          <SingleMessage
            style={styles}
            name= {msg.sender || msg.receiver}
            messages={msg.message}
            time={moment(msg.createdon).format('Do MMMM')}
            key={msg.id}
            click={(id) => this.props.getMessage(msg.id)}
            del={(id) => this.handleDelete(msg.id)}
          />
        ))}

      </ul>
    );
  }
}
const mapDispatchToProps = {
    getMessage: (id) => fetchSpecificMessage(id),
    delMessage: (id) => deleteSpecificMessage(id),
    message: (type) => messages(type) 
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

