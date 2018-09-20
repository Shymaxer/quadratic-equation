module.exports = function solveEquation(equation) {
  // your implementation
  let array = equation.split(' ');
  let a, b, c, d, x, y ;
   
  if (array[3] === '-'){
    b = -(array[4]);
  }
  else{
    b = array[4];
  }
  if (array[7] === '-'){
    c = -(array[8]);
  }
  else{
    c = array[8];
  }
  
  a = array[0];

  d = (b*b) - (4*a*c);

   x = ((-b) + Math.sqrt(d)) / (2 * a);
   y = (-b - Math.sqrt(d)) / (2 * a);

  let result = [Math.round(x), Math.round(y)]
    
    return result.sort((x,y)=> x - y);
}
