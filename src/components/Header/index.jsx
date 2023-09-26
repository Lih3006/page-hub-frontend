import { useNavigate } from "react-router-dom"
import logo from '../../images/logo.svg'
import { StyledHeaderLogin, StyledHeaderRegister } from "./style"



export const Header = ({ page }) => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("@user:data");
        localStorage.removeItem("@user:token");
        localStorage.removeItem("@user:id");
        navigate('/login')
    }

    if (page === 'register') {
        return (
            <StyledHeaderRegister>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <nav>
                    <button onClick={() => { navigate('/login') }}>Voltar</button>
                </nav>
            </StyledHeaderRegister >
        )
    }
    if (page === 'login') {
        return (
            <StyledHeaderLogin>
                <img src={logo} alt="Logo" />
            </StyledHeaderLogin >
        )
    }
    /*   if (page === 'dashboard') {
          return (
              <StyledHeaderDashboard>
                  <div>
                      <img src={logo} alt="Logo" />
                  </div>
                  <nav>
                      <button onClick={() => { logout() }}>Sair</button>
                  </nav>
              </StyledHeaderDashboard >
          )
      } */

}