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

    /** @param {number|string} number */
    const CheckNumber = (number) => {
        const _obj = {
            isEven: isEven(number),
            isOdd: isOdd(number)
        };
        return _obj;
    };

    _module.CheckNumber = CheckNumber;
})(globalThis);