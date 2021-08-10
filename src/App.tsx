import React, { useState } from 'react';
import { ConvertEngine } from './ConvertEngine';
import {
    getNumberStringArr
} from './Functions';

function App() {
    const [input, setInput] = useState<number>(0);

    const handleInputChange = (e: any): void => {
        const inputStr: string = e.target.value;
        const numb: number = parseInt(inputStr);
        if (isNaN(numb)) {
            setInput(0);
        } else {
            if (numb > Number.MAX_SAFE_INTEGER) {
                setInput(0);
                alert('Maximum number is: ' + getNumberStringArr(Number.MAX_SAFE_INTEGER.toString()).join(','));
            } else {
                setInput(numb);
            }
        }
    };

    const capitalizeFirstLetter = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const text: string = ConvertEngine(input);
    const displayText: string = capitalizeFirstLetter(text);

    return (
        <div className="App">
            <header className="App-header">
                <label
                    className="form-label"
                    htmlFor="text-input"
                >
                    Input a number
                </label>
                <input
                    autoComplete="off"
                    name="test-input"
                    id="test-input"
                    type="text"
                    value={ input }
                    onChange={ handleInputChange }
                    className="form-control"
                />
                <h1>{ displayText }</h1>
            </header>
        </div>
    );
}

export default App;
