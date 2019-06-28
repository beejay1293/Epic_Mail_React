import React, { PureComponent } from 'react';
import Header from './header';
import SideBar from './sidebar';
import Main from './mainbody';
import { messages } from '../../actions';
import { connect } from 'react-redux';

class Dashboard extends PureComponent {

  

  componentWillMount(){
  //  this.props.messages('')
    this.props.getMessages('');
   this.props.getMessages('sent')
   this.props.getMessages('unread')
   
  }
  render() {
    return (
      <section className="main">
        <Header />
        <SideBar />
        <Main />
      </section>
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
const mapDispatchToProps = dispatch => {
  return {
    getMessages: (type) => dispatch(messages(type))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
