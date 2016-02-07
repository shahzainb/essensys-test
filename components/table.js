import React from 'react';

export const Table = React.createClass({

  render () {
    
    let headings = Object.keys(this.props.items[0]);
    return (
      <table className="pure-table">
        <Thead headings={headings} />
        <Tbody items={this.props.items} />
      </table>
    );
  }
});

export const Thead = React.createClass({

  render () {

    let headings = [];

    this.props.headings.forEach((heading, index) => {
      headings.push(<th key={index}>{heading}</th>);
    });

    return (
      <thead>
        <tr>{headings}</tr>
      </thead>
    );
  }

});

export const Tbody = React.createClass({

  render () {

    let items = this.props.items;
    let rows = [];

    if (items.length > 0) {

      items.forEach((item, index) => {
        rows.push(<Tcell key={index} row={item} />);
      });
    }
    else {
      rows = <Tcell key={0} row={''} />
    }

    return (
      <tbody>{rows}</tbody>
    );
  }
});

export const Tcell = React.createClass({

  render () {

    let row = this.props.row;
    let cells = [];

    for (let key in row) {
      cells.push(<td key={key}>{row[key]}</td>)
    }

    return (
      <tr>
        {cells}
      </tr>
    );
  }
});