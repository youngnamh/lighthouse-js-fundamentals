function range (start, end, step){
  let result = [];
  if(step <= 0 || start > end || start === null || end === null || step === null){
    result = [];
  }else{
    for(let i = start; i <= end; i += step){
      result.push(i);
    }
  }
  return result;
}

console.log(range(0, 10, 11));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0,));