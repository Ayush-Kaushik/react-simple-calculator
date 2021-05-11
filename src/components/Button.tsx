import { useContext, MouseEvent } from 'react';
import "../App.css"
import { CalculatorDataContext, CalculatorContextValue } from '../context/CalculatorContext';

type ButtonProps = {
    readonly label: string,
    readonly value: string,
}

function Button({ label, value }: ButtonProps) {
    const {handleClick} = useContext(CalculatorDataContext) as CalculatorContextValue;

    const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        handleClick(event);
    }


    return (
        <>
            <button onClick={(event) => {
                onSubmit(event)
            }} value={value} className="Button">
                {label}
            </button>
        </>
    );
}

export default Button;