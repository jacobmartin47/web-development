var randomNumber1=Math.floor(Math.random()*6)+1;// for first image
var randomdiceimage="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage);
// for second image
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);

// display who  wins the game
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins The Game :)"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins The Game 🚩:)"
}
else{
    document.querySelector("h1").innerHTML="Its Draw!🥁"
}