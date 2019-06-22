import React, { PureComponent } from 'react';
import Header from './header';
import SideBar from './sidebar';
import Main from './mainbody';

class Dashboard extends PureComponent {
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

export default Dashboard;
