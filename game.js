let userScore=localStorage.getItem("user");
let comScore=localStorage.getItem("comp");

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScorePara = document.getElementById("yourScore");
const comScorePara = document.getElementById("computerScore");
const choose = document.getElementsByClassName("choose")[0]
const ripple = document.getElementsByClassName("circles")[0]
const results = document.getElementsByClassName("result")[0];
const heading = document.getElementsByClassName("heading")[0];
const final = document.getElementsByClassName("final")[0];
const nextBtn  = document.getElementById("next");
if(userScore) userScorePara.innerHTML = userScore;
if(comScore) comScorePara.innerHTML= comScore;

const choiceCard = {
                    "rock":"#0074B6",
                    "paper":"#FFA943",
                    "scissor":"#BD00FF",
                    }

let isPlaying =  true;

const genComputerChoice = () => 
{   
    const options = ["rock" , "paper", "scissor"]
   const randIdx = Math.floor(Math.random() * 3) ;
   return options[randIdx]
}

const drawGame = () =>
{
   
    msg.innerHTML = "Tied Up"
}

const showWinner = (userWin) =>
{
    ripple.style.display="block"
   if(userWin)
   {
    document.getElementsByClassName("resultCard")[0].parentNode.prepend(ripple)
    userScore++;
    localStorage.setItem("user",userScore);
    userScorePara.innerHTML = userScore;
    msg.innerHTML = "You Win"
    nextBtn.style.display="inline"
   }
   else{
    comScore++;
    localStorage.setItem("comp",comScore);
    comScorePara.innerHTML= comScore;
    document.getElementsByClassName("resultCard")[1].parentNode.prepend(ripple)
    msg.innerHTML = "You loose"
    nextBtn.style.display="none"
   }
}
const playGame = (userChoice) =>
{
    choose.style.display="none"
    console.log("user choice = ", userChoice)
    const comChoice = genComputerChoice()
    console.log("comp choice = ",comChoice)
    document.getElementsByClassName("resultCard")[0].src=userChoice+".png"
    document.getElementsByClassName("resultCard")[0].parentNode.style= "border :15px solid "+choiceCard[userChoice]+";"
    document.getElementsByClassName("resultCard")[1].src=comChoice+".png"
    document.getElementsByClassName("resultCard")[1].parentNode.style= "border :15px solid "+choiceCard[comChoice]+";"
    if(userChoice === comChoice)
    {
        ripple.style.display="none"
        nextBtn.style.display="none"
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice ==="rock")
        {
           userWin = comChoice ==="paper" ?false:true;
        }
        else if(userChoice === "paper")
        {
            userWin = comChoice === "scissor" ? false:true
        }
        else{
            userWin = comChoice === "rock" ? false:true
        }
        showWinner(userWin)
    }

}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        if(isPlaying){
            isPlaying =false
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
            results.style.display = "flex"
        }
    })
})




function playAgain(){
    isPlaying = true
    results.style.display = "none"
    choose.style.display="flex"
    heading.style.display = "flex"
    final.style.display="none"
    nextBtn.style.display="none"
}






function toggle(show) {
    if(show==0)
    {
        document.getElementById("rulesCard").style.display = "none";
    }
    else{
        document.getElementById("rulesCard").style.display = "block";
    }
}

function nextPage() {
    heading.style.display='none'
    results.style.display = "none"
    choose.style.display="none"
    final.style.display="flex"
    nextBtn.style.display="none"
}