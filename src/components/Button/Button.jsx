/* eslint-disable react/prop-types */
import './Button.css'

const Button = ({value}) => {
    return (
        <button className='btn'>
            {value}
        </button>
    );
}

export default Button;