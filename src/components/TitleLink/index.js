import { TitleLinkElem } from './styles';


const TitleLink = ({ children, light }) => {
	return (
		<TitleLinkElem light={ light }>{ children }</TitleLinkElem>
	)
}

export default TitleLink;
