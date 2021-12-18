export default {
  isUnderfined(obj) {
    return (typeof obj === 'undefined');
  },

  isNumber(obj) {
    return (parseInt(value) >= 0 || parseInt(value) <= 0);
  },

  isBoolean(obj) {
    return (typeof obj === 'boolean');
  },

  isString(obj) {
    return (typeof obj === 'string'); 
  },

  isObject(obj) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
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
