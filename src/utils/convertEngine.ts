import {
    TEEN,
    TY,
    HUNDRED,
    BaseNumbers,
    SpecialChar
} from './constants';
import {
    getUnit,
    getThreeDigitsNbrAsStrArray
} from './helpers';

export const convertEngine = (input: number): string | string[] => {
    const nbrAsStr: string = input.toString();

    /** 1 digit */
    if (input < 10) return parse1digit(nbrAsStr);

    /** 2 digits */
    if (input >= 10 && input < 100) return parse2digit(nbrAsStr);

    /** 3 digits */
    if (input >= 100 && input < 1000) return parse3digit(nbrAsStr);

    /** 4 digits and above */
    return parseNdigit(nbrAsStr);
};

const parse1digit = (nbrAsStr: string): string => {
    return BaseNumbers[nbrAsStr];
};

const parse2digit = (nbrAsStr: string): string => {
    const [char1, char2]: string[] = nbrAsStr.split('');

    if (char1 === '0') return parse1digit(char2);

    if (char1 === '1') {
        if (char2 === '0') return parse1digit(nbrAsStr); // 10
        if (['1', '2'].includes(char2)) return SpecialChar[nbrAsStr]; // 11 & 12

        return (['3', '5', '8'].includes(char2) ? SpecialChar[char2] : parse1digit(char2)) + TEEN;
    }

    return ''
        + (
            ['6', '7', '9'].includes(char1)
                ? parse1digit(char1)
                : SpecialChar[char1]
        )
        + TY
        + (
            (char2 !== '0')
                ? '-' + parse1digit(char2)
                : ''
        );
};

const parse3digit = (nbrAsStr: string): string => {
    if (nbrAsStr.length === 1) return parse1digit(nbrAsStr);
    if (nbrAsStr.length === 2) return parse2digit(nbrAsStr);

    const [char1, char2, char3]: string[] = nbrAsStr.split('');

    return parse1digit(char1)
        + HUNDRED
        + (
            (char2 === '0' && char3 === '0')
                ? ''
                : 'and ' + parse2digit(char2 + char3)
        );
};

const parseNdigit = (nbrAsStr: string): string[] => {
    const threeDigitsNbrAsStrArray: string[] = getThreeDigitsNbrAsStrArray(nbrAsStr);
    const textArray: string[] = threeDigitsNbrAsStrArray.map((str: string) => parse3digit(str));

    const fullTextArray: string[] = [];
    for (let i = 0; i < textArray.length; i++) {
        if (!textArray[i].includes('zero')) {
            fullTextArray.push(textArray[i] + getUnit(textArray.length - i));
        }
    }
    return fullTextArray;
};
