module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const x = item.enhancement + 1
  if(x >=20){
    
    return(item)
  }
  else{
    return{...item,
      enhancement:x,
      
        }
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item,durability:100 };
}

function get(item) {
}
