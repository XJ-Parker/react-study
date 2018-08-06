import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './practice12';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //normal
// ReactDOM.render(<App>
//     <h2>React.js 小书</h2>
//     <div>开源、免费、专业、简单</div>
//     订阅：<input />
// </App>, document.getElementById('root'));  // lession10.js

// ReactDOM.render(<App>
//     <div className='name'>My Name：Lucy</div>
//     <p className='age'>
//         My Age：<span>12</span>
//     </p>
// </App>, document.getElementById('root'));  // lession10.js

registerServiceWorker();



