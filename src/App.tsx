import React, { useEffect, useState } from 'react';
import { convertEngine } from './utils/convertEngine';
import {
    capitalizeFirstLetter,
    addCommaToNumber
} from './utils/helpers';

import Keyboard from './Keyboard';

function App() {
    const [input, setInput] = useState<number>(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const inputStr: string = event.target.value;
        const nbr: number = parseInt(inputStr);

        isNaN(nbr)
            ? setInput(0)
            : setInput(nbr);
    };

    useEffect(() => {
        if (input > Number.MAX_SAFE_INTEGER) {
            setInput(0);
            alert('Maximum number is: ' + addCommaToNumber(Number.MAX_SAFE_INTEGER));
        }
    }, [input]);

    const result: string | string[] = convertEngine(input);

    return (
        <div className="App">
            <div className="App-header">
                <h1>
                    {
                        (typeof result === 'string')
                            ? (
                                <h4 className="display-text">
                                    { capitalizeFirstLetter(result) }
                                </h4>
                            )
                            : result.map((str: string) => (
                                <h4 className="display-text" key={ str }>
                                    { capitalizeFirstLetter(str) }
                                    <br />
                                </h4>
                            ))
                    }
                </h1>
            </div>
            <div className="App-body">
                <br />
                <h1>{ addCommaToNumber(input) }</h1>
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
                    className="form-control text-center"
                />
                <Keyboard
                    input={ input }
                    setInput={ setInput }
                />
            </div>
        </div>
    );
}

export default App;
