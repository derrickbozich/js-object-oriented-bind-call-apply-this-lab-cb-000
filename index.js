//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn,thisValue, arg){
  let result = fn.call(this, fn.arguments);
  debugger
  return
}

// function (){ return {thisValue: this, arguments: Array.from(arguments)} }
