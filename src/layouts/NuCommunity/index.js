import { NuCommunityContainer } from './styles';
import Content from '../../components/Content';
import Title from '../../components/Title';
import Link from '../../components/Link';



const NuCommunity = () => {
	return (
		<NuCommunityContainer>
			<div className="container">
				<div className="row">
					<Content>
						<Title>NuCommunity</Title>
						<Title>A comunidade oficial do Nubank</Title>
						<Link inverted>Tire dúvidas, compartilhe ideias e faça parte</Link>
					</Content>
				</div>
			</div>
		</NuCommunityContainer>
	)
}

export default NuCommunity
