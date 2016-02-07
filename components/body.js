import React from 'react';
import { Observable } from 'rx/dist/rx.lite';
import { getData } from '../utils/utils';
import { Section } from './section.js';
import { Header } from './header.js';
import { Content } from './content.js';

export const Body = React.createClass({

  getInitialState() {
    return {
      items: [],
      isLoading: false
    }
  },
  
  render () {
    return (
      <div>
        <Header />
        <Section getTableData={this.getTableData} />
        <Content items={this.state.items} />
      </div>
    );
  },

  getTableData () {
    Observable
      .fromPromise(getData())
      .subscribe(items => {
        this.setState({
          items: items
        });
      });
  }
});