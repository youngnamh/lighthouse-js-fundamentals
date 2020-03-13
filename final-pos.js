const finalPosition = function(moves){
  let y = 0;
  let x = 0;
  for(let move of moves){
    if(move === 'north'){
      y++;
    }else if(move === 'south'){
      y--;
    }else if(move === 'east'){
      x++;
    }else if(move === 'west'){
      x--;
    }
  }
  let position = [x,y];
  return position;
}