import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Pix from './layouts/Pix';
import FGTS from './layouts/FGTS';
import Conta from './layouts/Conta';
import Cartao from './layouts/Cartao';


import './main.css';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Pix />
		<FGTS />
		<Conta />
		<Cartao />
	</React.StrictMode>,
	document.getElementById('root')
);
