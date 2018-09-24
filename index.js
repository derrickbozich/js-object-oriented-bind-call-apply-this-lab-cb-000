//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  let result = fn.call(thisValue, arg);
  debugger
  return
}

// function (){ return {thisValue: this, arguments: Array.from(arguments)} }
