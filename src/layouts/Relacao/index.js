import { RelacaoContainer } from './styles';
import Content from '../../components/Content';
import Title from '../../components/Title';
import Link from '../../components/Link';


const Relacao = () => {
	return (
		<RelacaoContainer>
			<div className="container">
				<div className="row">
					<Content>
						<Title>Reinventando a relação das pessoas com o dinheiro</Title>
						<Link inverted>É nisso que acreditamos</Link>
					</Content>
				</div>
			</div>
		</RelacaoContainer>
	)
}

export default Relacao;
