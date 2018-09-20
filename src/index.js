/**
 * addConstants
 */
export function addConstants(target, keyValues) {
  Object.keys(keyValues).forEach(key => {
    Object.defineProperty(target, key, {
      value: keyValues[key],
      writable: false,
      enumerable: true,
      configurable: false
    });
  });
}

/**
 * addConstantsToClass
 */
export function addConstantsToClass(Cls, keyValues) {
  // Add constants
  addConstants(Cls, keyValues);
  // If no class methods defined
  if (!Cls.hasOwnProperty('has')) {
    defineConstantsClassMethods(Cls);
  }
}

/**
 * importConstantsToClass
 * @param {Class} Cls
 * @param {Class} FromCls
 * @param {Array} keys
 */
export function importConstantsToClass(Cls, FromCls, keys) {
  keys.forEach(key => {
    Object.defineProperty(Cls, key, {
      value: FromCls[key],
      writable: false,
      enumerable: true,
      configurable: false
    });
  });
  // If no class methods defined
  if (!Cls.hasOwnProperty('has')) {
    defineConstantsClassMethods(Cls);
  }
}

/**
 * Define Constant Class methods
 */
function defineConstantsClassMethods(Cls) {
  // Check if Cls has constant
  Cls.has = function(constantName) {
    return typeof this.__lookupGetter__(constantName) !== 'undefined';
  };
  // Check if Cls has constant value
  Cls.hasValue = function(constantValue) {
    return this.allValues.indexOf(constantValue) > -1;
  };
  // 'allKeys' getter. List of defined constant keys on Cls.
  Object.defineProperty(Cls, 'allKeys', {
    get: function() {
      if (!this.hasOwnProperty('_allKeys_')) {
        this['_allKeys_'] = Object.keys(Cls).filter(k => k.match(/^[A-Z0-9_]+$/));
      }
      return this['_allKeys_'];
    }
  });
  // 'allValues' getter. List of defined constant values on Cls.
  Object.defineProperty(Cls, 'allValues', {
    get: function() {
      if (!this.hasOwnProperty('_allValues_')) {
        this['_allValues_'] = this.allKeys.map(key => {
          return this[key];
        });
      }
      return this['_allValues_'];
    }
  });
}
