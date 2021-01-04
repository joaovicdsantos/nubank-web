import { Container } from './styles';
import LinkGroup from './LinkGroup';
import Link from './Link';


const Footer = () => {
	return (
		<Container>
			<LinkGroup title="Nubank">
				<Link>Sobre nós</Link>
				<Link>Carreiras</Link>
				<Link>Perguntas frequentes</Link>
				<Link>Contato</Link>
				<Link>Imprensa</Link>
			</LinkGroup>
			<LinkGroup title="Produtos">
				<Link>Conta digital</Link>
				<Link>Cartão de crédito</Link>
				<Link>Rewards</Link>
				<Link>Empréstimo</Link>
				<Link>Conta PJ</Link>
			</LinkGroup>
			<LinkGroup title="Explore">
				<Link>Comunidade</Link>
				<Link>Blog</Link>
				<Link>Newsletter</Link>
				<Link>México</Link>
				<Link>Argentina</Link>
				<Link>Colômbia</Link>
			</LinkGroup>
			<LinkGroup title="Veja também">
				<Link>Auxílio Emergencial e FGTS</Link>
				<Link>Tudo sobre o Pix</Link>
			</LinkGroup>
			<LinkGroup title="Transparência">
				<Link>Política de Privacidade</Link>
				<Link>Política de Compliance</Link>
				<Link>Contratos</Link>
				<Link>Política de Segurança</Link>
				<Link>Relatórios Financeiros</Link>
				<Link>Ética & Compliance</Link>
				<Link>Dados Abertos</Link>
				<Link>SCR</Link>
			</LinkGroup>
			<LinkGroup title="Fale com a gente">
				<Link>0800 608 6236</Link>
				<Link>meajuda@nubank.com.br</Link>
			</LinkGroup>
		</Container>
	)
}

export default Footer;
