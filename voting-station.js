const chooseStations = function (stations) {
  let goodStations = [];
  let counter = 0;
  for (let station of stations){
    if(station[1] >= 20){
      if((station[2] === 'school') || (station[2] === 'community centre')){
        goodStations[counter] = station[0];
        counter++;  
      }
    }
  }
  return goodStations;
}
  