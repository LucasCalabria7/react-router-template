import { useNavigate } from "react-router-dom";
import {goToHomePage, goToProfilePage, goToLoginPage} from '../Routes/coordinator'

function Header() {

  const navigate = useNavigate()

  return (
    <header>
      <button onClick={()=> goToHomePage(navigate)} >
        Ir para página inicial
      </button>
      <button onClick={()=> goToProfilePage(navigate, "Calabria")} >
        Ir para página de perfil
      </button>
      <button onClick={()=> goToLoginPage(navigate)} >
        Ir para página Login
      </button>
    </header>
  );
}

export default Header;
