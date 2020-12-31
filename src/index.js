import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Pix from './components/Pix';
import FGTS from './components/FGTS';

import './main.css';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Pix />
		<FGTS />
	</React.StrictMode>,
	document.getElementById('root')
);
