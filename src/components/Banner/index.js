import { BannerElem } from './styles';


const Banner = ({ src, alt, imgWidth }) => {
	return (
		<BannerElem src={ src } alt={ alt } imgWidth={ imgWidth } />
	)
}

export default Banner;
