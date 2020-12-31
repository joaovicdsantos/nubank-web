import { LinkElemen, LinkContainer, Arrow } from './style';
import arrow from './arrow.svg';

const Link = ({ children, inverted }) => {
	return ( 
		<LinkContainer>
			<LinkElemen inverted={ inverted }>
				{ children }
			</LinkElemen>
			<Arrow xmlns="http://www.w3.org/2000/svg" inverted={ inverted } fill="#fff" viewBox="0 0 21 20" role="img"><title>Internal Link</title><g>
				<path d="M18.5 10H2.5M18.5 10L12 16.5M18.5 10L12 3.5" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"></path>
			</g></Arrow>
			<Arrow inverted={ inverted } data={ arrow } type="image/svg+xml" alt="Arrow" />
		</LinkContainer>
	);
} 

export default Link;
