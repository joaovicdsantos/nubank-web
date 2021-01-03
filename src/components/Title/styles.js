import styled from 'styled-components';
import { colors } from '../../tokens/index';


export const TitleElem = styled.h1`
	margin-bottom: ${props => props.marginSize || '30px'};
	color: ${props => props.inverted ? colors.black : colors.white};
	font-size: 28px;
    line-height: 1.16;
    letter-spacing: -0.03em;
    max-width: 20rem;
`;
