import { TitleElem } from './styles';


const Title = ({ children, inverted, marginSize }) => {
	return (
		<TitleElem inverted={ inverted } marginSize={marginSize}>{ children }</TitleElem>
	)
}

export default Title;

