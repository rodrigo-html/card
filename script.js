var box1 = document.getElementById('box1')
var box2 = document.getElementById('box2')
var card1 = document.getElementById('card1')
var card2 = document.getElementById('card2')
var back1 = document.getElementById('back1')
var back2 = document.getElementById('back2')
var gira ;var gira2
var mov1 ;var mov2
var sort
var bt = document.getElementById('bt')

bt.addEventListener('click',start)
bt.addEventListener('mousedown',()=>{
   bt.style.width='80%'
   bt.style.height='55%'
})
bt.addEventListener('mouseup',()=>{
   bt.style.width='85%'
   bt.style.height='60%'
})

function start(){

   sort = Math.round(Math.random()*1)
   mov2 = 180
   mov1 = 180
   gira1 = false
   gira2 = false
   card1.style.transform='rotate(0deg)'
   card2.style.transform='rotate(0deg)'

   setTimeout(()=>{
       if(sort==1){
       back1.innerHTML='Win'
       back1.style.backgroundColor='rgb(71, 226, 10)'
       back2.innerHTML='Lost'
       back2.style.backgroundColor='tomato'
       }else{
           back1.innerHTML='Lost'
           back1.style.backgroundColor='tomato'
           back2.innerHTML='Win'
           back2.style.backgroundColor='rgb(71, 226, 10)'
       }
   },700)
}

console.log(sort)

box1.addEventListener('click',()=>{
   if(gira1==false){
       card1.style.transform=`rotateY(${mov1}deg)`
       mov1+=180
       gira1=true
   }else{
       card1.style.transform=`rotateY(${mov1}deg)`
       mov1+=180
       gira1=false
   }
})

box2.addEventListener('click',()=>{
   if(gira2==false){
       card2.style.transform=`rotateY(${mov2}deg)`
       mov2+=180
       gira2=true
   }else{
       card2.style.transform=`rotateY(${mov2}deg)`
       mov2+=180
       gira2=false
   }
})

window.addEventListener('load',start)