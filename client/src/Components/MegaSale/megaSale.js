import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import './megaSale.css';
import Banner from './megaBanner';
import MegaSalePanel from './megaSalepanl1'

class MegaSale extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header showDropDown={this.props.showDropDown} hideDropDown={this.props.hideDropDown} dropDownUser={this.props.dropDownUser} />
        <Banner advertise={'MEGA SALE'} bred={'Mega Sale'} />
        <MegaSalePanel />
        <Footer/>
      </div>
    );
  }
}

export default MegaSale;
