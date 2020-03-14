const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i<=ingredients.length-1){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for(let n=0;n<=ingredients.length-1;n++){
  console.log(ingredients[n]);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let m=ingredients.length-1; m>=0;m--){
  console.log(ingredients[m]);
}
/*let x = ingredients.length-1;
while(x>=0){
  console.log(ingredients[x]);
  x--;
}*/

