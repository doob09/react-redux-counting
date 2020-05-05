import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './Components/App';
import reducer from './store/reducers';

// pass reducer to createStore 
// attach the store to App component using Provider to be available for the whole app
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));