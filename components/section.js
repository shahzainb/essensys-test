import React from 'react';
import { Article } from './article';

export const Section = React.createClass({
  render () {
    return (
      <section className="splash-container">
        <Article getTableData={this.props.getTableData} />
      </section>
    );
  }
});