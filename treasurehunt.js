//create a random number for the treasure and the bomb
var treasureLocation = Math.floor(Math.random()*16)
var bombLocation = Math.floor(Math.random()*16)
//make sure the bomb and the treasure aren't the same number
if(treasureLocation === bombLocation){
  bombLocation = Math.floor(Math.random() * 16)
}

//set the initial counter value
var counter = 10

const treasure = (location) => {
  //changing the counter after each click
  counter = counter - 1
  document.getElementById("counter").innerHTML = `Turns remaining: ${counter}`


  if(treasureLocation === location){
    document.getElementById(location).innerHTML = "๐งช"
    document.getElementById("outcome").innerHTML = "You WIN! ๐งช๐งช๐งช"
    document.getElementById("gameboard").innerHTML = ""
    

  }
  else if(bombLocation === location){
    document.getElementById(location).innerHTML = "๐งโโ๏ธ"
    document.getElementById("outcome").innerHTML = "You lose!! ๐งโโ๏ธ๐งโโ๏ธ๐งโโ๏ธ"
    document.getElementById("gameboard").innerHTML = ""
    
    
  }
  else if(counter === 0){
    document.getElementById("outcome").innerHTML = "Sorry, you lose. ๐งโโ๏ธ๐งโโ๏ธ"
    document.getElementById("gameboard").innerHTML = ""
    
  }
  else if(treasureLocation !== location && bombLocation !== location){
    document.getElementById(location).innerHTML = "๐คท๐พโโ๏ธ"
  }
  document.getElementById(location).disabled = true
}