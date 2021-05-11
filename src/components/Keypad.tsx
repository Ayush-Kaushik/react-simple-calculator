import Button from './Button';
import keyList from '../constants/Keys.constants';
import "../App.css";

function Keypad() {    
    return (
        <div className="Keypad-layout">
            {
                keyList.map((keyRow, keyListIndex) => {
                    return (<div key={`div-key-${keyListIndex}`}> {
                        keyRow.map((key, keyRowIndex) => {
                            return (<Button 
                                key={`key-${key.label}-${keyRowIndex}`} 
                                label={key.label} 
                                value={key.value}
                                />)
                        })
                    }
                    </div>)
                })
            }
        </div>
    );
}

export default Keypad;