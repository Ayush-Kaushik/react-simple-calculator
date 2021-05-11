import Keypad from '../components/Keypad';
import Screen from '../components/Screen';

function Calculator() {
    return (
        <div className="Calculator">
            <Screen/>
            <Keypad />
        </div>
    );
}

export default Calculator;