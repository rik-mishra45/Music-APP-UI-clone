let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score")





const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}

const drawGame=()=>{
msg.innerText="Game was draw , play again";
msg.style.backgroundColor='#081b31';
}

const showWin=(userWin,userChoice,compChoice)=>{
if(userWin) {
    userScore++;
    msg.innerText=`You win ! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor= "green";
    userscore.innerText=userScore;
}
else{
    compScore++;
    msg.innerText=`You lose ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compscore.innerText=compScore;
}
}


const playgame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
     drawGame();
    } 
    else{
        let userWin=true;
        if(userChoice=="rock" && compChoice=="paper"){
             userWin=false;
        }
        if(userChoice=="scissors" && compChoice=="rock"){
            userWin=false;
        }
        if(userChoice=="paper" && compChoice=="scissors"){
            userWin=false;
        }
        showWin(userWin,userChoice,compChoice);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log("choice",choiceId);
        playgame(choiceId);
    });
});