import { LinkElemen } from './style';

const Link = ({ children, inverted }) => {
    return <LinkElemen inverted={ inverted }>{ children }</LinkElemen>
} 

export default Link;