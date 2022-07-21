/**
 * check-number.js <https://github.com/dhenfie/check-number>
 * simple library to check even or odd number.
 * 
 * @author Fajar Susilo <fajarsusilo1600@gmail.com> 
 */

(function (factory) {

    let _module = null;

    if (typeof factory.window === 'object') {
        // browser environment
        _module = factory.window;
    } else {
        // nodejs environment
        _module = exports;
    }

    /** @param {string|number} number */
    const isEven = (number) => {
        let _number = (typeof number === 'string') ? parseInt(number) : number;
        if (_number % 2 === 0) {
            return true;
        }
        return false;
    };

    /** @param {string|number} number */
    const isOdd = (number) => {
        let _number = (typeof number === 'string') ? parseInt(number) : number;
        if (_number % 2 !== 0) {
            return true;
        }
        return false;
    };

    /**
     * @param {string|number} maxNumber 
     * @returns {number[]} 
     */
    const getEven = (maxNumber) => {
        let result = [];
        for (let i = 2; i <= maxNumber; i++) {
            if (i % 2 === 0) {
                result.push(i);
            }
        }
        return result.reverse();
    };

    /**
    * @param {string|number} maxNumber 
    * @returns {number[]} 
    */
    const getOdd = (maxNumber) => {
        let result = [];
        for (let i = 2; i <= maxNumber; i++) {
            if (i % 2 !== 0) {
                result.push(i);
            }
        }
        return result.reverse();
    };

    /** @param {number|string} number */
    const CheckNumber = (number) => {
        const _obj = {
            getEven: () => getEven(number),
            getOdd: () => getOdd(number),
            get isEven() {
                return isEven(number);
            },
            get isOdd() {
                return isOdd(number);
            }
        };
        return _obj;
    };

    _module.CheckNumber = CheckNumber;
})(globalThis);