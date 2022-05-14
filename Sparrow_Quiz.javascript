<!DOCTYPE html>
<html>
<style>
div {
  width: 100px;
  height: 50px;
  animation-name: swallow;
  position: relative;
  background-color:rgb(200, 150, 100);
  border: 4px solid;
  border-color: rgb(150, 50, 30);
  border-radius: 10px;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}

@keyframes swallow {
  0%   {left:0px; top:40px;}
  50% {left:500px; top:40px;}
  100% {left:0px; top:40px;}
}

body {
  background-color:rgb(220, 220, 220);

  }
h2 {
background-color:rgb(240, 240, 240);
border: 2px solid;
border-color:rgb(200, 200, 200);
padding: 10px;
border-radius: 5px;
}
p {
background-color:rgb(240, 240, 240);
border: 1px solid;
border-color:rgb(200, 200, 200);
border-radius: 5px;
padding: 10px;
}
</style>
<body>

<h2> Sparrow Quiz </h2>

<p id= "question1">What is the airspeed velocity of an unlaiden swallow?</p>

<button type ="button"
onclick='document.getElementById("question1").innerHTML = "Incorrect"'>35 meters per beat</button>

<button type ="button"
onclick='document.getElementById("question1").innerHTML = "Correct"'>75 meters per beat</button>

<button type ="button"
onclick='document.getElementById("question1").innerHTML = "Incorrect"'>135 meters per beat</button>

<button type ="button"
onclick='document.getElementById("question1").innerHTML = "Incorrect"'>15 meters per beat</button>

<br> <br>
<p id= "question2">How much does a swallow weigh?</p>

<button type ="button"
onclick='document.getElementById("question2").innerHTML = "Incorrect"'>3 - 5 oz</button>

<button type ="button"
onclick='document.getElementById("question2").innerHTML = "Incorrect"'>15 - 20 oz</button>

<button type ="button"
onclick='document.getElementById("question2").innerHTML = "Incorrect"'>0.001 - 0.012 oz</button>

<button type ="button"
onclick='document.getElementById("question2").innerHTML = "Correct"'>0.6 - 0.7 oz</button>
<div></div>
</body>
</html>
