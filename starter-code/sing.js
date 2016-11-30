console.log("sing.js loaded");

var userAnswer = window.prompt("How many verses of music would like to hear?");

function sing(){
  for (var i = parseInt(userAnswer); i > 0; i--) {
    if(i > 1){
      console.log(i + " bottles of beer on the wall, ");
      console.log(i + " bottles of beer!");
      console.log("Take one down and pass it around");
      console.log(i - 1 + " bottles of beer on the wall!");
    }else if(i === 1){
      console.log(i + " bottle of beer on the wall, ");
      console.log(i + " bottle of beer!");
      console.log("Take one down and pass it around");
      console.log("No more bottles of beer");
    }
  }   
}

sing();
