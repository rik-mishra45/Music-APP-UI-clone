let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#newBtn")
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetGame=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
    turnO=true;
    msg_container.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO) { // playerO
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const showWinner=(winner)=>{
msg.innerText=`congratulations , winner is ${winner}`;
msg_container.classList.remove("hide");
boxes.forEach((box)=>{
box.disabled=true;
})
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
        }
      }
    }
}
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);