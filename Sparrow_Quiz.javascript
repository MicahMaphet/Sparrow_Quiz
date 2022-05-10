<!DOCTYPE html>
<html>
<style>
body {
  background-color: lightgray;
  opacity: 1;
  }
h2 {
  color: white;
  text-align: center;
}
p {
  color: red;
  text-align: center;
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
<p2 id= "question2">How much does a swallow weigh?</p2>
<br>

<button type ="button"
onclick='document.getElementById("question2").innerHTML = "Incorrect"'>3 - 5 oz</button>

<button type ="button"
onclick='document.getElementById("question2").innerHTML = "Incorrect"'>15 - 20 oz</button>

<button type ="button"
onclick='document.getElementById("question2").innerHTML = "Incorrect"'>0.001 - 0.012 oz</button>

<button type ="button"
onclick='document.getElementById("question2").innerHTML = "Correct"'>0.6 - 0.7 oz</button>

</body>
</html>
