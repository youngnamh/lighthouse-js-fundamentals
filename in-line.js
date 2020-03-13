function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions('happy', function laugh(num){
    var haha = "";
    for(let i=0;i<num;i++){
        haha+= 'ha';
    }
    haha +='!';
    return haha;
});
    

