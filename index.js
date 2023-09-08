

function compChoice(){
    let ran = Math.floor(Math.random()  * 3) + 1;
    
    if(ran == 1){
        ans = "rock"
        return ans
    }
    else if(ran == 2){
        ans = "paper"
        return ans
    }
    else{
        ans = "sissor"
        return ans
    }
    
}



let ans;

function playRound(p , c){

    if(p == c){
        ans = "draw"
        console.log("draw")
    }
    else if( p == "paper" && c == "rock"){
        ans = "you win"
        console.log("you win")
    }
    else if( p == "rock" && c == "sissor"){
        ans = "you win"
        console.log("you win")
    }
    else if(p == "sissor" && c == "paper"){
        ans = "you win"
        console.log("you win")
    }
    else{
        ans = "you loose"
        console.log("you losse")
    }

}


let c;
function game(){
    
    
    
    const comp  = compChoice()
    c = comp;
    playRound(inp,comp)
    
}
    
    let inp;
    
    const buttons = document.querySelectorAll("button")
    
    buttons.forEach((button) =>{
        
        button.addEventListener('click', () =>{
            inp = button.id
            game()
            display()
        });
    });


    function display(){
        let b =  document.querySelector(".because")
        b.textContent = c;

        let r = document.querySelector(".result")
        r.textContent = ans;
    }
    
