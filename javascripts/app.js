var  rover ={
  direccion: 'N',
  X: 0,
  Y: 0,
  travelLog: [],
  
 }
 
 var marte = [
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0]
 ]
   
 // ======================
 function turnLeft(rover){
   switch(rover.direccion){
 
     case 'N':
     rover.direccion = 'O'
     break
 
     case 'O':
     rover.direccion = 'S'
     break
 
     case 'S':
     rover.direccion = 'E'
     break
 
     case 'E':
     rover.direccion = 'N'
     break
 
   }
   console.log("turnLeft was called! " +' '+rover.direccion)
   rover.travelLog.push ([' moved to the left in the direction of', rover.direccion])
 }
 
 function turnRight(rover){
 
   switch(rover.direccion){
      case 'N':
      rover.direccion = 'E'
      break
 
      case 'E':
      rover.direccion = 'S'
      break
 
      case 'S':
      rover.direccion = 'O'
      break
 
      case 'O':
      rover.direccion = 'N'
      break
 
   }
   console.log("turnRight was called!"+' '+ rover.direccion)
   rover.travelLog.push ([' moved to the right in the direction of',rover.direccion])
   
 }
 
 function moveForward(rover){
 
   switch (rover.direccion){
 
     case 'N' :
     rover.Y= rover.Y -1
     break
 
     case 'E':
     rover.X= rover.X +1
     break
 
     case 'S':
     rover.Y= rover.Y +1
     break
 
     case 'O':
     rover.X= rover.X-1
     break
 
   }
   console.log ("moveForward was called [" + rover.X + ", " + rover.Y + "]")
   rover.travelLog.push (['in the position',rover.X,rover.Y])
   
 }
 
 
 function commands(commands) {
   for(var i=0; i < commands.length; i++){
 
     switch(commands[i]){
 
       case 'f': 
       moveForward (rover)
       break
 
       case 'l': 
       turnLeft(rover)
       break
 
       case'r':
       turnRight(rover)
       break
     }
    
   }
   
  }
 
 commands(['r','f','f','r','f','f','l','f','r','f','f']);
 console.log('The route of Rover was:' + rover.travelLog)