import React, { Component } from 'react';
import { connect } from 'react-redux'


class viewSpecificMessage extends Component {

    render() {
    return (
      <div className="read__email">
         <div className="subject__wrapper">
             <h1 className="subject">
            {this.props.specificMessage.subject}
          </h1> 
          <p className="time__created">{this.props.specificMessage.createdon}</p></div>  
          <div className="users">

            <h1 className="from"> {this.props.sender.firstname} {this.props.sender.lastname} </h1>
          <p className="epic">  { this.props.specificMessage.sender } </p>
            <p className="to">to: {this.props.specificMessage.receiver}</p>
          </div>      
           <div className="message__body">
           <p> {this.props.specificMessage.message}
            </p> 
            
          </div>
          <hr className="line"/>
        </div>

    )
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
    body: state.messages.body,
    sender: state.messages.sender,
    receiver: state.messages.receiver
})

export default connect(mapStateToProps)(viewSpecificMessage);
