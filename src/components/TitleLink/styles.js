import styled from 'styled-components';
import { colors } from '../../tokens/index';


export const TitleLinkElem = styled.a`
	font-size: calc(1.375rem + 1.5vw);
	color: ${props => props.light ? colors.primary_light : colors.primary};
	text-decoration: none;
	display: inline-block;
	margin-bottom: -10px;
`;
