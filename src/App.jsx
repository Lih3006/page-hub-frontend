
import { RoutesMain } from './routes'
import { StyledReset } from './styles/reset'
import { StyledGlobal } from './styles/global'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {


  return (
    <>
      <ToastContainer />
      <StyledReset />
      <StyledGlobal />
      <RoutesMain />
    </>
  )
}

export default App
