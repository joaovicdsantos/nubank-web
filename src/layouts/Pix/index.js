import { PixContainer, PixExample, Card, CardTitle, Input, Button } from './styles';
import Title from '../../components/Title/';
import Link from '../../components/Link/';
import pixMobile from './pix-mobile.png';


const Pix = () => {
	return (
		<PixContainer>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Title marginSize="10px">Pix: um novo jeito de fazer transferências e pagamentos</Title>
						<Link href="#" inverted>Saiba como funciona</Link>
						<div className="text-center">
							<PixExample src={pixMobile} />
						</div>
						<Card>
							<form>
								<CardTitle>Peça sua conta e cartão de crédito do Nubank</CardTitle>
								<Input type="text" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="Digite seu CPF"/> 
								<Button>Continuar</Button>
							</form>
						</Card>
					</div>
				</div>
			</div>
		</PixContainer>
	);
};

export default Pix;
