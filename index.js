
var randomLocation = require('random-location')
const P = {
  latitude: <Enter the cordinates>,
  longitude: <Enter the cordinates>
}
 
const R = <Enter the Radius> 
for (let j = 1; j < 50; j++) {
const randomPoint = randomLocation.randomCirclePoint(P, R)
console.log(randomPoint)
}