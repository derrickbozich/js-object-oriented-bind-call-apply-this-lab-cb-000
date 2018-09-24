//Your code here
function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn){
  return fn.call(this);
}
