import { FGTSContainer, Banner } from './styles';
import Content from '../../components/Content';
import Title from '../../components/Title';
import Link from '../../components/Link';
import banner from './moça_bonita.jpg';


const FGTS = () => {
	return (
		<FGTSContainer>
			<div className="container">
				<div className="row">
					<Content>
						<Title inverted>Traga seu FGTS e Auxílio Emergencial para o Nubank</Title>
						<Link href="#">Confira os Benefícios</Link>
					</Content>
				</div>
			</div>
			<Banner src={ banner } alt="Moça segurando o cartão do nubank" />
		</FGTSContainer>
	)
}

export default FGTS;
