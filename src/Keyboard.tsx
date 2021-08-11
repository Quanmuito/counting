import React from 'react';

type KeyboardProps = {
    input: number
    setInput: React.Dispatch<React.SetStateAction<number>>
}

const Keyboard = ({ input, setInput }: KeyboardProps) => {
    const keyLayout: string[] = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Clear',
    ];

    const handleClearInput = (): void => {
        setInput(0);
    };

    const handleEditInput = (key: string): void => {
        const inputAsString: string = input.toString();
        const newInput: string = inputAsString + key;
        const newInputAsNumber: number = parseInt(newInput);
        newInputAsNumber
            ? setInput(newInputAsNumber)
            : setInput(input);
    };

    return (
        <div className="keyboard">
            <div className="keyboard_keys">
                {
                    keyLayout.map((key: string) => (
                        <React.Fragment key={ key }>
                            <button
                                type="button"
                                className={ `keyboard__key ${(key === 'Clear') ? 'keyboard__key--wide' : ''}` }
                                onClick={ (key === 'Clear') ? handleClearInput : () => handleEditInput(key) }
                            >
                                { key }
                            </button>
                            {
                                ['3', '6', '9', 'backspace'].includes(key) ? <br /> : ''
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export default Keyboard;
