
let min=1,
    max=10,
    winningNum= guess(),
    guessesLeft=3;

const game=document.querySelector("#game"),
      minNum=document.querySelector(".min-num"),
      maxNum=document.querySelector(".max-num"),
      guessBtn=document.querySelector("#guess-btn"),
      guessInput=document.querySelector("#guess-input")
      message=document.querySelector(".message");

minNum.textContent=min;
maxNum.textContent=max;

game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})
guessBtn.addEventListener('click',function(){
let guess=parseInt(guessInput.value);

//validate
if( isNaN(guess) || guess<min || guess>max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
    return;
}

if(guess === winningNum){
    gameOver('win'); 
}else{
    guessesLeft-=1;
    if(guessesLeft==1){
        setMessage(`Your guess is incorrect , you have ${guessesLeft} chance left.`,'red')
    }
    else if(guessesLeft==0){
        gameOver('lost');
    }else{
        setMessage(`Your guess is incorrect , you have ${guessesLeft} chances left.`,'red')
    }
    
}
})

function gameOver(result){
    if(result==='win'){
//disable input option
guessInput.disabled=true;
    
//border color to green
guessInput.style.borderColor='green';
// set message 
setMessage(`You Win !!`,'green');
    }else{
        guessInput.disabled=true;
        
        guessInput.value='';
        setMessage(`GAME OVER . The number was  ${winningNum}. Play Again `,'red')
    }
    guessBtn.value='Play Again';
    guessBtn.className += 'play-again';
}

function setMessage(msg,color){
    message.style.color=color;
    message.textContent=msg;
}

function guess(){
    let num=Math.round(Math.random()*max)+1;
    console.log(num); 
    return num;
}

