
let gameOver=false;
const box=document.getElementById('box');
let turn='O'
let totalturn=0;
let winner=[ [0,1,2],[3,4,5],[6,7,8],
             [0,3,6],[1,4,7],[2,5,8],
             [0,4,8],[2,4,6]

];
const bord_array=new Array(9).fill("E");

const cheakwinner=function(){
     for(let [index0, index1,index2] of winner){
        if(bord_array[index0]!=="E"&&
            bord_array[index0]===bord_array[index1] &&
            bord_array[index1]===bord_array[index2]
        ){
            return 1;
        }
       
     }
     return 0;
};

box.addEventListener('click',(event) =>{
    if(gameOver) return;
    const box=document.getElementById('box');
    const h1=document.getElementById('h1');

  const element=event.target;
  if(bord_array[element.id]==="E"){
  if(turn==='O'){
    element.innerHTML='O'
    bord_array[element.id]='O';
    totalturn++;
    if(cheakwinner()){
        const top=document.getElementById('top');
        document.getElementById('text').innerHTML="winner is 0";
        gameOver=true;
        box.style.opacity='0';
        top.style.backgroundImage = "url('images.jpg')";
        top.style.backgroundSize="cover";
        top.style.backgroundPosition="center";
        h1.style.color="white";
        return;
     }
   
    turn='X';
  }else{
    if(turn==='X'){
        element.innerHTML='X'
        bord_array[element.id]='X';
        totalturn++
       if(cheakwinner()){
        const top=document.getElementById('top');
        document.getElementById('text').innerHTML="winner is x";
        gameOver=true;
        box.style.opacity='0';
        top.style.backgroundImage = "url('images.jpg')";
        top.style.backgroundSize="cover";
        top.style.backgroundPosition="center";
        h1.style.color="white";
        return;
       }
       
        
    }
    turn='O';
}
if(totalturn===9 && !cheakwinner()){
    const top=document.getElementById('top');
    document.getElementById('text').innerHTML="match draw";
    box.style.opacity='0';
    top.style.backgroundImage = "url('images.jpg')";
        top.style.backgroundSize="cover";
        top.style.backgroundPosition="center";
        h1.style.color="white";
}
  
  }
})


const btn=document.getElementById('btn');
btn.addEventListener('click' ,() =>{
    
    const cell=document.getElementsByClassName('the');
  Array.from(cell).forEach((cell)=>{
     cell.innerHTML='';
     document.getElementById('text').innerHTML = '';
  })
 
  const top=document.getElementById('top');
  const box=document.getElementById('box');
  const h1=document.getElementById('h1');
  bord_arra=new Array(9).fill("E");
  turn='O';
  totalturn=0;
  gameOver=false;
  box.style.opacity="1";
  top.style.backgroundImage="none";
  h1.style.color="black";
})