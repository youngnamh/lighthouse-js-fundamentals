function lastIndexOf(array,indx){
  let retNum = -1;
  for(let i=0;i<array.length;i++){
    if(array[i]==indx){
      retNum = i;
    }
  }
  return retNum;
}