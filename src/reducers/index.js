import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import PrintersReducer from './reducer_printers';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  printers: PrintersReducer
});

export default rootReducer;
