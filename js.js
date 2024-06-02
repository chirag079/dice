var random1=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+random1+".png";
var src1="images/"+randomimage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",src1);

var random2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+random2+".png";
var src2="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",src2);

if(random1>random2)
{
    document.querySelector("h1").innerHTML="🚩 Player1 Wins!";
}
else if (random2>random1)
{
    document.querySelector("h1").innerHTML="Player2 Wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML="DRAW! :(";
}
