import { CartaoContainer } from './styles';
import Content from '../../components/Content';
import LinkTitle from '../../components/TitleLink';
import Title from '../../components/Title';
import Link from '../../components/Link';
import Banner from '../../components/Banner';

import cardOnHand from './card_on_hand.png';


const Cartao = () => {
	return (
		<CartaoContainer>
			<div className="container">
				<div className="row">
					<Content>
						<LinkTitle>Cartão de Crédito</LinkTitle>
						<Title inverted>Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também.</Title>
						<Link>Saiba Mais</Link>
					</Content>
				</div>
				<Banner src={ cardOnHand } imgWidth="50%"/>
			</div>
		</CartaoContainer>
	)
}

export default Cartao;
