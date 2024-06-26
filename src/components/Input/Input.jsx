/* eslint-disable react/prop-types */
import './Input.css'

const Input = ({type, placeholder}) => {
    return (
        <input className='input' type={type} placeholder={placeholder} />
    );
}

export default Input;