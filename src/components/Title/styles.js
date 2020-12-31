import styled from 'styled-components';
import { colors } from '../../tokens/index';


export const TitleElem = styled.h1`
	margin-bottom: ${props => props.marginSize || '30px'};
	color: ${props => props.inverted ? colors.black : colors.white};
`;
