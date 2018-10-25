class Coolculator {
  add() {
    var x = 0;
    for(var i = 0; i < arguments.length; i++) {
      x += arguments[i];
    }
    return x;
  }
  multiply(a, b) {
    return a*b;
  }
  subtract(a, b) {
    return a-b;
  }
  divide(a, b) {
    if(b == 0) {
      return 'you cannot divide by 0!';
    }
    else {
      return a/b;
    }
  }
  square(a) {
    return a*a;
  }
  raise(a, b) {
    var x = a;
    for(var i = 1; i < b; i++) {
      x *= a;
    }
    return x;
  }
  isCool(a) {
    a.toString();
    if(a[0] == a[a.length-1]) {
      return true;
    }
    else {
      return false;
    }
  }
  factorial(a) {
    var x = 1;
    for(var i = 2; i <= a; i++) {
      x *= i;
    }
    return x;
  }
  random(a) {
    return Math.floor(Math.random()*a);
  }
}

module.exports = Coolculator;
