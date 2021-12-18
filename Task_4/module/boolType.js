export default {
  isUnderfined(obj) {
    return (typeof obj === 'undefined');
  },

  isNumber(obj) {
    return (parseInt(obj) >= 0 || parseInt(obj) <= 0);
  },

  isBoolean(obj) {
    return (typeof obj === 'boolean');
  },

  isString(obj) {
    return (typeof obj === 'string'); 
  },

  isObject(obj) {
    return (typeof obj === "object" && !Array.isArray(obj) && obj !== null);
  },

  isNull(obj) {
    return (obj === null);
  },

  isFunction(obj) {
    return (typeof (obj) === 'function');
  },

  isNAN(obj) {
    return (isNaN((obj)))
  },

}
