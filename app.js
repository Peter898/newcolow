let colors = ["black","blue","gray","purple","yellow","orange"]
const color = document.querySelector("#color")

//Using the addEventListener function, make the button clickable and rotate between colors
//Second paramter is an lambda function that does all the work
myBtn.addEventListener("click", function(){
    //get random number between 0 and 4
    const randomNumber = Math.floor(getRandomNumber() * 6);
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = color[randomNumber]

    document.getElementById("color").innerHTML = "Background color is: " + colors[randomNumber]
    if(randomNumber == 0){
        document.getElementById("color").style.color = "black"
        document.getElementById("heading").style.color = "white"
    }
    else if (randomNumber == 1)
    {
        document.getElementById("color").style.color = "blue"
        document.getElementById("heading").style.color = "black"
    }
    else if (randomNumber == 2)
    {
        document.getElementById("color").style.color = "gray"
        document.getElementById("heading").style.color = "white"
    }
    else if(randomNumber ==3)
    {
        document.getElementById("color").style.color = "purple"
        document.getElementById("heading").style.color = "white"
    }
    else if (randomNumber == 4)
    {
        document.getElementById("color").style.color = "yellow"
        document.getElementById("heading").style.color = "orange"
        document.getElementById("color").style.backgroundColor = "black"
    }
    else if(randomNumber == 5)
    {
        document.getElementById("color").style.color = "orange"
        document.getElementById("heading").style.color = "yellow"
    }
});


function getRandomNumber()
{
    return Math.random();
}
