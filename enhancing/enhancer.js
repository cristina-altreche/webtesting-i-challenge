module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (!item.enhancement) {
    return { message: "item cannot be enhanced"}
  } 
  else if (item.enhancement >= 20) {
    return item
  }
  return { ...item, enhancement: item.enhancement + 1}
  
}

function fail(item) {
  return { ...item };
}

function repair(item) {
 if (!item.durability) {
   return { message: "your item has no durability"}
 }
 else if (item.durability >= 100) {
   return { message: "your item already has max durability"}
 }
 else if (item.durability <= 0) {
   return { message: "your item is broken"}
 }
 return { ...item, durability: 100}
}

function get(item) {
  return { ...item };
}
