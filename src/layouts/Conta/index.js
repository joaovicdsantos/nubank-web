import { ContaContainer } from './styles';
import TitleLink from '../../components/TitleLink';
import Title from '../../components/Title';
import Link from '../../components/Link';
import Banner from '../../components/Banner';
import phone from './phone.png';


const Conta = () => {
	return (
		<ContaContainer>
			<div className="container">
				<div className="row">
					<div className="col-s12">
						<TitleLink>Conta do Nubank</TitleLink>
						<Title inverted>Nossa conta digital com mais de 20 milhões de clientes em todo o Brasil.</Title>
						<Link>Segura e sem complicações</Link>
					</div>
				</div>
			</div>
			<Banner src={ phone } />
		</ContaContainer>
	)
}

export default Conta;
