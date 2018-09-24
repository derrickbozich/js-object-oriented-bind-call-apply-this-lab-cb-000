//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return result = fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args){
  return result = fn.apply(thisValue, arg);
}

// function (){ return {thisValue: this, arguments: Array.from(arguments)} }
