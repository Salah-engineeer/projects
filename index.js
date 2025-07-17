countEl=document.getElementById("count-el")
countEll=document.getElementById("count-ell")
let count=0
let count1=0
function by1(){
    count+=1
    countEl.innerText =count
}
function by2(){
    count+=2
    countEl.innerText =count
}

function by3(){
    count+=3
    countEl.innerText =count
}

function bu1(){
    count1+=1
    countEll.innerText =count1
}
function bu2(){
    count1+=2
    countEll.innerText =count1
}

function bu3(){
    count1+=3
    countEll.innerText =count1
}
resetEl=document.getElementById("reset-el")
function reset(){
    count=0
    count1=0
     countEll.innerText =count1
      countEl.innerText =count
}
