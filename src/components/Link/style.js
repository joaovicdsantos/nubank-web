import styled from 'styled-components';
import { colors } from '../../tokens/index';

export const LinkElemen = styled.a`
    color: ${props => props.inverted ? colors.white : colors.primary};
	text-decoration: none;
	font-weight: 500;
	margin-right: 5px;
	font-size: 14pt;

    &:hover {
        color: ${props => props.inverted ? colors.white : colors.primary};
        text-decoration: underline;
    }
`;

export const LinkContainer = styled.div`
	display: inline-block;	
	height: 30px;	
`;

export const Arrow = styled.svg`
	stroke: ${props => props.inverted ? colors.white : colors.primary};
	height: 16px;
	vertical-align: unset;
`;
