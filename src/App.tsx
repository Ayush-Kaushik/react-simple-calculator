import Calculator from './container/Calculator';
import { CalculatorDataProvider } from './context/CalculatorContext';

function App() {
    return (
        <>
            <CalculatorDataProvider>
                <Calculator />
            </CalculatorDataProvider>
        </>
    );
}

export default App;
