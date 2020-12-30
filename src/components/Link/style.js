import styled from 'styled-components';
import { colors } from '../../tokens/index';

export const LinkElemen = styled.a`
    color: ${props => props.inverted ? colors.white : colors.primary};
    text-decoration: none;

    &:hover {
        color: ${props => props.inverted ? colors.white : colors.primary};
        text-decoration: underline;
    }
`;
