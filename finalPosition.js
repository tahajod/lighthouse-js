
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves){
  let x=0,y=0;
  let positions = [,];
  for ( const move of moves )
  {
    
    switch (move){
      case "north":
        y++
        break;
      case "south":
        y--;
        break;
      case "east":
        x++;
        break;
      case "west":
        x--;
        break;
      }
    }
   positions[0]=x;
   positions[1]=y;   
   
  return positions;
}

console.log (finalPosition(moves));