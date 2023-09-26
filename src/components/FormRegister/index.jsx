import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify';



import { StyledForm } from "../../styles/StyledForm"
import { SelectForm } from '../Select'
import { Input } from '../Input'
import { api } from '../../services/api'
import { formRegisterSchema } from './SchemaFormRegister'
import { StyledButtonRegister } from '../../styles/StyledForm'


export const FormRegister = () => {
    const { register, handleSubmit, formState: { errors }
    } = useForm({
        resolver: zodResolver(formRegisterSchema)
    })
    const navigate = useNavigate()

    const submit = async (formData) => {
        console.log(formData)
        try {
            await api.post('/users', formData)
            toast.success('Conta criada com sucesso!', { autoClose: 2000, theme: 'dark' })
            navigate('/login')
        }
        catch (error) {
            console.log(error)
            toast.error('Ops! Algo deu errado', { autoClose: 2000, theme: 'dark' })
        }
    }


    return (
        <>
            <StyledForm onSubmit={handleSubmit(submit)}>
                <legend>Crie sua conta</legend>
                <small>Rapido e grátis, vamos nessa</small>
                <Input id='name' label='Nome' type='text' placeholder='Digite aqui seu nome' autoComplete="off" register={register('name')} />
                {errors.name ? <p>{errors.name.message}</p> : null}
                <Input id='email' label='Email' type='email' placeholder='Digite aqui seu email' autoComplete="off" register={register('email')} />
                {errors.email ? <p>{errors.email.message}</p> : null}
                <Input id='password' label='Senha' type='password' placeholder='Digite aqui sua senha' autoComplete="off" register={register('password')} />
                {errors.password ? <p>{errors.password.message}</p> : null}
                <Input id='confirm_password' label='Confirmar Senha' type='password' placeholder='Confirme aqui sua senha' autoComplete="off" register={register('confirm')} />
                {errors.confirm ? <p>{errors.confirm.message}</p> : null}
                <Input id='bio' label='Bio' type='text' placeholder='Fale sobre você' autoComplete="off" register={register('bio')} />
                {errors.bio ? <p>{errors.bio.message}</p> : null}
                <Input id='contact' label='Contato' type='text' placeholder='Opção de contato' autoComplete="off" register={register('contact')} />
                {errors.contact ? <p>{errors.contact.message}</p> : null}
                <SelectForm onChange={(e) => { register('course_module') }} id='course_module' label='Selecionar Módulo' autoComplete="off" register={register('course_module')} />
                {errors.course_module ? <p>{errors.course_module.message}</p> : null}
                <StyledButtonRegister>Cadastrar</StyledButtonRegister>
            </StyledForm>
        </>

    )

}