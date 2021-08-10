import {
    getUnit,
    parse1digit,
    parse2digit,
    parse3digit,
    parseNdigit
} from './Functions';

export const ConvertEngine = (input: number): string => {
    const numberStr: string = input.toString();

    /** 1 digit */
    if (input < 10) return parse1digit(numberStr);

    /** 2 digits */
    if (input >= 10 && input < 100) return parse2digit(numberStr);

    /** 3 digits */
    if (input >= 100 && input < 1000) return parse3digit(numberStr);

    /** 4 digit and above */
    const arr: string[] =  parseNdigit(numberStr);
    const fullArr: string[] = [];
    for (let i = 0; i < arr.length; i++) {
        fullArr.push(arr[i]);
        fullArr.push(getUnit(arr.length - i));
    }
    return fullArr.join(' ');
};
