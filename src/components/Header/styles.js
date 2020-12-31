import styled from 'styled-components';
import { colors } from '../../tokens';


export const HeaderContainer = styled.div`
    padding: 10px 0;
    background-color: ${colors.white};
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;
`;

export const Menu = styled.button`
	border: none;
	background-color: transparent;
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	transition: .3s all;


	&:focus {
		outline: 0;
		background-color: #D09BE5;
	}
`;
