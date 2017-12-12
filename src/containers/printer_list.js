import React, { Component } from 'react';
import { connect } from 'react-redux';

class PrinterList extends Component {
  renderList() {
    // console.log(this.props.printers);
    return this.props.printers.map((printer) => {
      // console.log(printer);
      return (
        <li
          key={printer.name}
          className="list-group-item">
          { printer.name }
        </li>
      );
    });
  }

  render() {
    // console.log(this.props);
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.printers);
  return {
    printers: state.printers
  }
}

export default connect(mapStateToProps)(PrinterList);
