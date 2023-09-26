import InputMask from 'react-input-mask'

export const Input = ({ id, label, register, ...rest }) => {
    if (id === 'contact') {
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <InputMask id={id} {...rest} {...register} mask="(99) 9 9999-9999"
                />
            </div>
        )
    } else {
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <input id={id} {...rest} {...register} />
            </div>
        )
    }

}
