import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Pix from './layouts/Pix';
import FGTS from './layouts/FGTS';
import Conta from './layouts/Conta';
import Cartao from './layouts/Cartao';
import Rewards from './layouts/Rewards';
import Relacao from './layouts/Relacao';
import NuCommunity from './layouts/NuCommunity';
import Repensar from './layouts/Repensar';
import Footer from './layouts/Footer';


import './main.css';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Pix />
		<FGTS />
		<Conta />
		<Cartao />
		<Rewards />
		<Relacao />
		<NuCommunity />
		<Repensar />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);
