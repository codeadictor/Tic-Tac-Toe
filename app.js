let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".ms-container");
let newBtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".reset-btn");
let count =0;
let turnO=true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = ()=>{
        turnO=true;
        enableboxes();
        msgContainer.classList.add("hide");
    }


boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
      if(turnO){
        console.log("box was clicked");
        box.innerText="o";
        box.style.color="#ffe74c";
        turnO=false;
        count++;
      }
      else{
        box.innerText="x";
        turnO=true;
        count++;
      }
      box.disabled=true;
      checkWinner();
   });
});

const disableboxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations , The Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}


const drow = ()=>{
    msg.innerText="It's a Drow Match";
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = ()=>{
    for(let patterns of winPatterns){
         let pos1Val = boxes[patterns[0]].innerText;
         let pos2Val = boxes[patterns[1]].innerText;
         let pos3Val = boxes[patterns[2]].innerText;
         if(pos1Val!="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
            else{
                if(count==9){
                    drow();
                }
            }
           
                
         }
        
       

    }
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);