import React, { PureComponent } from 'react';
import { css } from '@emotion/core';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Header from './header';
import SideBar from './sidebar';
import Main from './mainbody';
import { messages, sendMessageAction } from '../../actions';
import { connect } from 'react-redux';

export class Dashboard extends PureComponent {
  state = {
    modal: 'close',
    to: '',
    subject:'',
    message: '',
    success: '',
    error: ''
  };

  componentDidMount() {
    this.props.getMessages('');
    this.props.getMessages('sent');
    this.props.getMessages('unread');
  }

  handleModal(type) {
    if(type === 'close'){
      this.setState({
        to: '',
        subject:'',
        message: '',
        success: '',
        error: ''
      })
    }
    this.setState({modal: type})
  }

  handleInput(e) {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  async handleSubmit(e){
    e.preventDefault();
    const { to, subject, message } = this.state
    const messageDetail = { reciever: to, subject, message}
    await this.props.sendMessage(messageDetail)
    this.setState({
      success: this.props.messageSuccess,
      error: this.props.messageError || 'receiver is invalid'
    })
  }

  send(){

  }
  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;

    return (
      <section className="main">
        <Header />
        <SideBar click={(type) => this.handleModal('show')}/>
        <Main />
        {this.props.loading ? (
          <div className="spinner_overlay">
            <div className="spinner-icon-container">
              <ScaleLoader css={override} sizeUnit={'px'} size={80} color={'#ffaf30'} loading={this.props.loading} />
            </div>
          </div>
        ) : (
          ''
        )}
        <div className={this.state.modal}>
          <form action="" className="message_form">
            <div className="message_container">
              <div className="message_wrapper">
                <ul>
                  <li className="message_wrapper_header">
                    <h1 className="message_header">New Message</h1>
                  </li>
                  <li className="message_wrapper_clear">
                    <div className="clear__overlay" onClick={(type) => this.handleModal('close')}>x</div>
                  </li>
                </ul>
              </div>
              <div className={this.state.success === 'message sent successfully' ? 'success' : 'error'} > {this.state.success || this.state.error} </div>

              <hr />
              <div className="group__checkbox">
                {' '}
                <h3 className="send__to_group">send to group</h3>{' '}
                <p className="grp__check">
                  <input className="checkbox__grp" type="checkbox"  />
                </p>{' '}
              </div>

              <select className="" id="group__list" />

              <input 
              type="text" 
              placeholder="To" 
              name="to" 
              className="messageTo" 
              onChange={e => {this.handleInput(e)}}
              value={this.state.to} 
              />

              <input type="text" 
              placeholder="Subject" 
              name="subject" 
              className="messageSubject" 
              onChange={e => {this.handleInput(e)}}
              value={this.state.subject} 
              />

              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Enter Your Message"
                className="messageContent"
                onChange={e => {this.handleInput(e)}}
                value={this.state.message} 
              />

              <hr />

              <button type="submit" className="send_message__btn" onClick = {e => {this.handleSubmit(e)}}>
               {this.props.sending ? 'sending...' : 'send'}
              </button>
              <button type="submit" className="draft_message__btn">
                Save
              </button>
            </div>
          </form>
        </div>
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
  errors: state.messages.errors,
  loading: state.messages.isLoading,
  sending: state.messages.sending,
  messageSuccess: state.messages.messageSuccess,
  messageError: state.messages.messageError
});
const mapDispatchToProps = {
  getMessages: type => messages(type),
  sendMessage: details => sendMessageAction(details)
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
