import { RepensarContainer } from './styles';
import Content from '../../components/Content';
import Title from '../../components/Title';
import Link from '../../components/Link';


const Repensar = () => {
	return (
		<RepensarContainer>
			<div className="container">
				<div className="row">
					<Content>
						<Title>Um blog para você repensar o seu dinheiro</Title>
						<Link inverted>Conheça o Fala, Nubank</Link>
					</Content>
				</div>
			</div>
		</RepensarContainer>
	)
}

export default Repensar;
