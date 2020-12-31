import { HeaderContainer, Logo, Menu } from "./styles";
import logoFile from "./logo.svg";
import menuIcon from "./menu_icon.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <Logo src={ logoFile } alt="Nubank" />	
		  </div>
		  <Menu className="col-2">
		    <img src={ menuIcon } alt="Menu" />
		  </Menu>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
