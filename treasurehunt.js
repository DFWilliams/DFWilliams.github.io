//create a random number for the treasure and the bomb
var treasureLocation = Math.floor(Math.random()*16)
var bombLocation = Math.floor(Math.random()*16)
//make sure the bomb and the treasure aren't the same number
if(treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random() * 16)
}

console.log("treasureLocation", treasureLocation)

//set the initial counter value
var counter = 10

const treasure = (location) => {
  //changing the counter after each click
  counter = counter - 1
  document.getElementById("counter").innerHTML = `Turns remaining: ${counter}`


  if(treasureLocation === location){
    document.getElementById(location).innerHTML = "🧪"
    document.getElementById("outcome").innerHTML = "You WIN! 🧪🧪🧪"
    document.getElementById("gameboard").innerHTML = ""
    

  }
  else if(bombLocation === location){
    document.getElementById(location).innerHTML = "🧟‍♂️"
    document.getElementById("outcome").innerHTML = "You lose!! 🧟‍♂️🧟‍♂️🧟‍♂️"
    document.getElementById("gameboard").innerHTML = ""
    
    
  }
  else if(counter === 0){
    document.getElementById("outcome").innerHTML = "Sorry, you lose. 🧟‍♂️🧟‍♀️"
    document.getElementById("gameboard").innerHTML = ""
    
  }
  else if(treasureLocation !== location && bombLocation !== location){
    document.getElementById(location).innerHTML = "🤷🏾‍♂️"
  }
  document.getElementById(location).disabled = true
}