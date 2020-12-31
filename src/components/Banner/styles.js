import styled from 'styled-components';


export const BannerElem = styled.img`
	display: block;
	margin: 30px auto 0 auto;
	width: ${ props => props.imgWidth || "100%"};
`;
