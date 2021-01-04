import styled from 'styled-components';
import { colors } from '../../../tokens';


export const Container = styled.div`
	margin-bottom: 50px;
`;

export const Title = styled.span`
	font-size: 13pt;
	color: ${ colors.gray }80;
	display: inline-block;
	margin-bottom: 28px;
`;

export const LinksContainer = styled.nav`
	display: flex;
	flex-direction: column;
`;
