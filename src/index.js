module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  //let str = String(n).replace('-','');
  let a = '';

  for (let i = str.length-1; i > -1; i -= 1) 
    {a += str[i]; }

  return a
}
