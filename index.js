//player1
var randomNumber1;
randomNumber1=Math.random();
randomNumber1=randomNumber1*6; 
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);
var image1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", image1);

//player2
var randomNumber2;
randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
console.log(randomNumber2);
var image2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", image2);

//winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Won";
}
else{
document.querySelector("h1").innerHTML="Draw";
}