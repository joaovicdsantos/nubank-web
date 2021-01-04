import { LinkElem } from './styles';


const Link = ({ children, href }) => {
	return (
		<LinkElem href={ href }>{ children }</LinkElem>
	)
}

export default Link;
