let min=1,max=10,ans=generatenum(),guessleft=3;
const minele=document.querySelector(".min");
const maxele=document.querySelector(".max");

minele.textContent=min;
maxele.textContent=max;
const game=document.getElementById("game")

const btn=document.getElementById("guess-value-btn")
const input=document.getElementById("guess-value")
btn.addEventListener("click",checkinput);

function checkinput(e){
  let num=parseInt(input.value)

  if(Number.isNaN(num)|| num>max || num<min){
    showmsg(`please enter a number betweem ${min} and ${max}`,"red")
  }

  else{
    if(num===ans){
      gameOver(true,`${num} is correct ,YOU WON`,"green");
    }

    else{
      guessleft-=1
      if(guessleft===0){
        gameOver(false,`u have no guess left ,YOU LOSS`)
      }
      else{
        input.style.borderColor="red";
        showmsg(`${num} is  not correct ,YOU HAVE ${guessleft} GUESSLEFT`,"red");
      }
    }

  }
  

}
function gameOver(won,msg)
{
  let colour= won===true?"green":"red"
  input.disabled=true;
  input.style.borderColor=colour;
  btn.value="Play Again"
  btn.className+="play-again"
  showmsg(msg,colour)

}
//event delegation for play agin
game.addEventListener("mousedown",function(e){
  if(e.target==document.querySelector(".play-again")){
    window.location.reload()
  }
})



msgelement=document.querySelector(".message")
function showmsg(s,c){
/*   const msg=document.createElement("h6")
  msg.appendChild(document.createTextNode(s))
  msg.style.color=c;
    game.appendChild(msg) */
    msgelement.textContent=s;
    msgelement.style.color=c;

}
function generatenum()
{
  range=max-min+1
  num=(Math.floor( Math.random()*range))+min

  return num
}
// https://github.com/Khan