import React, { PureComponent } from 'react';
import SingleBtn from './SingleBtn';
import { changeDashboardState } from '../../actions/index'
import { connect } from 'react-redux';

class Btn extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bts: [
        {
          className: 'inbox__btn active',
          fonts: 'fas fa-inbox',
          name: 'Inbox',
          id: 1,
        },
        {
          className: 'sent__btn',
          fonts: 'fas fa-paper-plane',
          name: 'sent',
          id: 2,
        },
        {
          className: 'draft__btn',
          fonts: 'fas fa-comment-alt',
          name: 'draft',
          id: 3,
        },
        {
          className: 'starred__btn',
          fonts: 'fas fa-envelope',
          name: 'unread',
          id: 4,
        },
      ],
    };
  }
 
  render() {
    const { bts } = this.state;
    return (
      <div className="nav2">
        <ul>
          {bts.map(btn => (
            <SingleBtn
              styles={btn.className}
              font={btn.fonts}
              name={btn.name}
              key={btn.id}
              click={(type) => this.props.changeState(btn.name)}
             />
          ))}
          <hr />
          <SingleBtn
            styles="contacts__btn"
            font="fas fa-address-book"
            name="Contacts(5)"
           />
          <hr />

          <div className="grp">
            <li className="groups">
              <i className="fas fa-angle-up  up" />
              <h4 className="group__wrapper">Groups</h4>
            </li>
            <ul className="all__groups" />

            <li className="create__group">
              <i className="fas fa-plus" />
Create Group
            </li>
            <hr />
          </div>


        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeState: (type) => dispatch(changeDashboardState(type))
  }
}

export default connect(null, mapDispatchToProps)(Btn);
