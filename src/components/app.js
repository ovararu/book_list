import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';
import PrinterList from '../containers/printer_list';

export default class App extends Component {
  render() {
    return (
      // <div>
      //   <BookList />
      //   <BookDetail />
      // </div>
      <div>
        <PrinterList />
      </div>
    );
  }
}
