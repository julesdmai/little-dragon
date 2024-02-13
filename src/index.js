import React from 'react';
import ReactDom from 'react-dom';
// // Comment in later
// import { render } from 'react-dom';
// import App from './components/App';

// // Styling
// import _styles from './scss/application.scss';

// // Transition to this later
// render(
//     <App />,
//     document.getElementById('root')
// );

const App = () => <div>Hello World</div>;

ReactDOM.render(<App />, document.getElementById('root'));