import { FGTSContainer, Banner } from './styles';
import Title from '../../components/Title/index';
import Link from '../../components/Link/index';
import banner from './moça_bonita.jpg';


const FGTS = () => {
	return (
		<FGTSContainer>
			<div className="container">
				<div className="row">
					<div className="col-s12">
						<Title inverted>Traga seu FGTS e Auxílio Emergencial para o Nubank</Title>
						<Link href="#">Confira os Benefícios</Link>
					</div>
				</div>
			</div>
			<Banner src={ banner } alt="Moça segurando o cartão do nubank" />
		</FGTSContainer>
	)
}

export default FGTS;
