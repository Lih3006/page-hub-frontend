import { useNavigate } from "react-router-dom"
import logo from '../../images/logo.svg'
import { StyledNavDashboard } from "./style"

export const Navbar = ({ page }) => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("@user:data");
        localStorage.removeItem("@user:token");
        localStorage.removeItem("@user:id");
        navigate('/login')
    }

    return (
        <StyledNavDashboard>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <button onClick={() => { logout() }}>Sair</button>
            </nav>
        </StyledNavDashboard >
    )


}