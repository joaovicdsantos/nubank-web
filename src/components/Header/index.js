import { HeaderContainer, Logo } from "./styles";
import logoFile from "./logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo src={logoFile} alt="Nubank" />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
