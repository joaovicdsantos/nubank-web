import styled from 'styled-components';
import backgroundImg from './background.jpg';


export const RepensarContainer = styled.div`
	width: 100%;
	height: 520px;
	display: flex;
	background: url(${ backgroundImg }) no-repeat center center;
	background-size: cover;
	padding-top: 65px;
	padding-right: 130px;
`;
