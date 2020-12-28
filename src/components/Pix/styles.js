import styled from 'styled-components';
import { colors } from '../../tokens';

export const PixContainer = styled.div`
  background-color: ${colors.primary};
  padding: 40px 0;
`;

export const Title = styled.h1`
  color: ${colors.white};
`;

export const PixExample = styled.img`
  width: 190px;
  margin: 30px 0;
`;

export const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 20px;
  padding: 28px;
  width: 90%;
  margin: 0 auto;
`;

export const CardTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -1px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.black}30;
  width: 100%;
  margin: 38px 0;
  padding: 8px 0;
  font-weight: 500;
  font-size: 14px;

  &:focus {
    outline: none;
  }

`;

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.primary};
  border: none;
  border-radius: 100px;
  padding: 12px;
  color: ${colors.white};
  font-weight: 500;
  font-size: 14pt;
`;
