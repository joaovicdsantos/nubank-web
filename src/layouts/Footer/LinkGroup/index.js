import { Container, Title, LinksContainer } from './styles';
import Content from '../../../components/Content';


const LinkGroup = ({ title, children }) => {
	return (
		<Container>
			<div className="container">
				<div className="row">
					<Content>
						<Title>{ title  }</Title>
						<LinksContainer>
							{ children }
						</LinksContainer>
					</Content>
				</div>
			</div>
		</Container>
	)
}

export default LinkGroup;
