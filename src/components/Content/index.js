import { ContentElem } from './styles';


const Content = ({ children }) => {
	return (
		<ContentElem className="col-12">{ children }</ContentElem>
	)
}

export default Content;
