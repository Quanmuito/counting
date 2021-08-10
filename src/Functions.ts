import {
    TEEN,
    TY,
    HUNDRED,
    THOUSAND,
    MILLION,
    BILLION,
    TRILLION,
    QUADRILLION,
    BaseNumbers,
    SpecialChar
} from './Numbers';

export const getNumberStringArr = (n: string): string[] => {
    const reversedString: string = n.split('').reverse().join('');
    const reversedStringArr: string[] = reversedString.match(/.{1,3}/g)?.reverse() ?? [];
    return reversedStringArr.map((str: string) => str.split('').reverse().join(''));
};

export const getUnit = (index: number): string => {
    switch (index) {
        case 2: return THOUSAND;
        case 3: return MILLION;
        case 4: return BILLION;
        case 5: return TRILLION;
        case 6: return QUADRILLION;
        default: return '';
    }
};

export const parse1digit = (n: string): string => {
    return BaseNumbers[n];
};

export const parse2digit = (n: string): string => {
    if (n === '10') return parse1digit(n);
    if (n === '11' || n === '12') return SpecialChar[n];

    const [char1, char2]: string[] = n.split('');

    switch (char1) {
        case '1': {
            if (['3', '5', '8'].includes(char2)) return SpecialChar[char2] + TEEN;
            return parse1digit(char2) + TEEN;
        }

        case '6':
        case '7':
        case '9': {
            if (char2 === '0') return parse1digit(char1) + TY;
            return parse1digit(char1) + TY + '-' + parse1digit(char2);
        }

        default:
            if (char2 === '0') return SpecialChar[char1] + TY;
            return SpecialChar[char1] + TY + '-' + parse1digit(char2);
    }
};

export const parse3digit = (n: string): string => {
    if (n.length === 1) return parse1digit(n);
    if (n.length === 2) return parse2digit(n);

    const [char1, char2, char3]: string[] = n.split('');

    if (char2 === '0' && char3 === '0') return parse1digit(char1) + HUNDRED;

    return (char2 === '0')
        ? parse1digit(char1) + HUNDRED + ' and ' + parse1digit(char3)
        : parse1digit(char1) + HUNDRED + ' and ' + parse2digit(char2 + char3);
};

export const parseNdigit = (n: string): string[] => {
    const numberStrArr: string[] = getNumberStringArr(n);
    const threeDigitArr: string[] = numberStrArr.map((str: string) => parse3digit(str));

    return threeDigitArr;
};
