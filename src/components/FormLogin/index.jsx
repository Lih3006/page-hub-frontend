import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';



import { StyledForm } from "../../styles/StyledForm"
import { Input } from "../Input"
import { api } from "../../services/api"
import { StyledButtonGoBackRegister, StyledButtonLogin } from '../../styles/StyledForm'


export const FormLogin = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = async (formData) => {
        try {
            const response = await api.post('/sessions', formData)
            localStorage.setItem("@user:data", JSON.stringify(response.data.user));
            localStorage.setItem("@user:token", JSON.stringify(response.data.token));
            localStorage.setItem("@user:id", JSON.stringify(response.data.user.id));

            navigate('/dashboard')
        }
        catch (error) {
            console.log(error)
            toast.error('Ops! Algo deu errado', { autoClose: 2000, theme: 'dark' })
        }
    }
    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <legend>Login</legend>
            <Input id='email' label='Email' type='email' placeholder='Digite aqui seu email' autoComplete="off" register={register('email')} />
            <Input id='password' label='Senha' type='password' placeholder='Digite aqui sua senha' autoComplete="off" register={register('password')} />
            <StyledButtonLogin type='submit'>Entrar</StyledButtonLogin>
            <div>
                <small>Ainda não possui uma conta?</small>
                <StyledButtonGoBackRegister onClick={() => { navigate('/register') }}>Cadastre-se</StyledButtonGoBackRegister>
            </div>
        </StyledForm>
    )
}