var button1 = document.getElementsByTagName("button")[0];
var button2 = document.getElementsByTagName("button")[1];
var button3 = document.getElementsByTagName("button")[2];
var h1 = document.querySelector("h1");
var isPink = false;

button1.addEventListener("click" , function(){
  alert("This Pokemon is weak to Fire, Flying, Ice, Psychic"); 
});

button2.addEventListener("click" , function(){
    alert("This Pokemon is weak to Water, Rock, and Ground Type moves"); 
});

button3.addEventListener("click" , function(){
    alert("This Pokemon is weak to Grass and Electric Type moves"); 
});

setInterval(function(){
    if (isPink){
        h1.style.color = "green";
    } else {
        h1.style.color = "red";
    } 
    isPink = !isPink;
}, 1000);