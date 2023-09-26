import { Navbar } from "../../components/Navbar"
import { StyledDashboard } from "./style";


export const Dashboard = () => {
    const userData = JSON.parse(localStorage.getItem("@user:data"));
    const userName = userData.name
    const userModule = userData.course_module

    return (
        <>
            <Navbar page='dashboard' />
            <StyledDashboard>
                <header>
                    <h1>Olá, <span>{userName}</span></h1>
                    <p>{userModule}</p>
                </header>
                <section>
                    <h2>Que pena! Estamos em desenvolvimento :(</h2>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </section>
            </StyledDashboard>
        </>
    )
}


