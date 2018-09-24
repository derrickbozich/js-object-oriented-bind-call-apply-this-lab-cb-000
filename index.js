//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return result = fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args){
  return result = fn.apply(thisValue, args);
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  let copy = functionToBeCopied;
  return copy.call(thisValue);
}

// function (){ return {thisValue: this, arguments: Array.from(arguments)} }
