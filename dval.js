var _dval = function() {
  let obj = arguments[1];
  for (var i = 2; i < arguments.length; ++i) {
    obj = obj[arguments[i]];
    if (obj === undefined || obj === null) return arguments[0];
  }
  return obj;
};
