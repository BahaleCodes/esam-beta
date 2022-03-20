import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import reducers from "./reducers/reducer";
import './index.scss';
import App from './App';

// const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
	// <Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	// </Provider>,
	document.getElementById('root')
);
