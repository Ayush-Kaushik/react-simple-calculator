import {useContext} from "react";
import { CalculatorDataContext } from '../context/CalculatorContext';

function Screen() {
 const {calculatorState} = useContext(CalculatorDataContext);

  return (
    <div className="Display">
      <input value={calculatorState?.query} readOnly/>
      <input value={calculatorState?.result} readOnly/>
      <textarea value={calculatorState?.previousCalculations} readOnly/>
    </div>
  );
}

export default Screen;
