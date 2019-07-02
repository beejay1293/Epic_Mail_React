import React, { Component } from 'react';
import TopContent from './topcontent';
import Message from './messagebody';
import ViewSpecificMessage from './viewSpecificMessage';
import { connect } from 'react-redux';

class MainBody extends Component {
 render() {
   return (
  <div className="main__body">
     <TopContent />
     {this.props.body === 'viewMessages' ? <Message /> : <ViewSpecificMessage />}
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
  body: state.messages.body
})
 

export default connect(mapStateToProps)(MainBody);
