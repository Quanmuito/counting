import {
    THOUSAND,
    MILLION,
    BILLION,
    TRILLION,
    QUADRILLION
} from './constants';

/**
 * Example use:
 * Input: 12345678 (12,345,678)
 * -> '12345678'
 * -> '87654321'
 * -> ['876', '543', '21']
 * -> ['678', '345', '12']
 * -> ['12', '345', '678']
 */
export const getThreeDigitsNbrAsStrArray = (nbrAsStr: string): string[] => {
    /** reversed the input number as string */
    const reversedString: string = nbrAsStr.split('').reverse().join('');

    /** Separate the string into an array of string, each element is a combination of 3 numbers */
    const reversedStringArr: string[] = reversedString.match(/.{1,3}/g) ?? ['Something went wrong!'];

    /** Reverse the order of numbers in each element of the array, reverse the array and return */
    return reversedStringArr.map((str: string) => str.split('').reverse().join('')).reverse();
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

export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const addCommaToNumber = (nbr: number): string => {
    return getThreeDigitsNbrAsStrArray(nbr.toString()).join(',');
};


