import { useForm } from 'react-hook-form'


const options = [
    { id: 1, name: 'Primeiro Módulo', value: 'Primeiro Módulo (Introdução ao Frontend)' },
    { id: 2, name: 'Segundo Módulo', value: 'Segundo Módulo (Frontend Avançado)' },
    { id: 3, name: 'Terceiro Módulo', value: 'Terceiro Módulo (Frontend avançado)' },
    { id: 4, name: 'Quarto Módulo', value: 'Quarto Módulo (Introdução ao Backend)' },
    { id: 5, name: 'Quinto Módulo', value: 'Quinto Módulo (Introdução ao Backend)' },
    { id: 6, name: 'Sexto Módulo', value: 'Sexto Módulo (Introdução ao Backend)' }
]

export const SelectForm = ({ id, label, register, name, ...rest }) => {
    return (
        <div>
            <label htmlFor=''>Selecionar Módulo</label>
            <select id={id} {...rest}{...register} >
                <option value="">Selecione aqui seu módulo</option>
                {options.map((option) => (
                    <option key={option.id} name={option.name} value={option.value}>{option.name}</option>
                ))}
            </select>
        </div>
    )

}