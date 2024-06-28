console.log("welcome to spotify")
let songIndex=0;
let audioEle=new Audio('songs/1.mp3')
let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myProgressBar");
let songInfo=document.getElementById("songInfo")
var images = document.querySelector('img[src="playing1.gif"]');
var songItem=Array.from(document.getElementsByClassName("songItem"))
var info=document.getElementsByTagName("p")[0]
var next=document.getElementById("next")
var prev=document.getElementById("previous")

let masterPlay1=document.getElementById("masterPlay1")
let masterPlay2=document.getElementById("masterPlay2")
let masterPlay3=document.getElementById("masterPlay3")
let masterPlay4=document.getElementById("masterPlay4")
let masterPlay5=document.getElementById("masterPlay5")
let masterPlay6=document.getElementById("masterPlay6")
let masterPlay7=document.getElementById("masterPlay7")
let masterPlay8=document.getElementById("masterPlay8")
let masterPlay9=document.getElementById("masterPlay9")
let masterPlay10=document.getElementById("masterPlay10")

let array=[
    masterPlay1,masterPlay2,masterPlay3,masterPlay4,masterPlay5,masterPlay6,masterPlay7,
    masterPlay8,masterPlay9,masterPlay10
]

let currIdx=1;
let prevIdx=0;
let nextIdx=2;
let pastIdx=0;
let flag=false;



let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
let audioEle1=[0,0,0,0,0,0,0,0,0,0]
for(let j=0;j<10;j++){
    audioEle1[j]=new Audio(songs[j].filePath);

}

let k=0;
songItem.forEach((ele)=>{
ele.getElementsByTagName("img")[0].src=songs[k].coverPath;
k=k+1;
})

// handle play/pause click
masterplay.addEventListener('click',()=>{
    if(flag==false){
        audioEle1[currIdx].play();
       masterplay.classList.remove('fa-play-circle')
       masterplay.classList.add('fa-pause-circle')
       images.src=songs[currIdx].coverPath
       flag=true;
       array[currIdx].classList.remove('fa-play-circle')
       array[currIdx].classList.add('fa-pause-circle')
       info.innerHTML=songs[currIdx].songName;
    }
    else{
       audioEle1[currIdx].pause();
       masterplay.classList.remove('fa-pause-circle')
       masterplay.classList.add('fa-play-circle')
       flag=false;
       array[currIdx].classList.remove('fa-pause-circle')
       array[currIdx].classList.add('fa-play-circle')
       images.src="playing1.gif";
       info.innerHTML="Music is language of love"
    }
})

next.addEventListener('click',()=>{
    if(flag==false) {
        audioEle1[nextIdx].play();
        array[nextIdx].classList.remove('fa-play-circle');
        array[nextIdx].classList.add('fa-pause-circle');
        images.src=songs[nextIdx].coverPath
        info.innerHTML=songs[nextIdx].songName;
    }
    else{
        array[currIdx].classList.remove('fa-pause-circle')
        array[currIdx].classList.add('fa-play-circle')
        audioEle1[currIdx].pause();
        audioEle1[nextIdx].play();
        array[nextIdx].classList.remove('fa-play-circle');
        array[nextIdx].classList.add('fa-pause-circle');
        images.src=songs[nextIdx].coverPath
        info.innerHTML=songs[nextIdx].songName;
    }
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
    flag=true;
    currIdx=(currIdx+1)%10;
    prevIdx=(currIdx-1)%10;
    if(prevIdx<0) prevIdx=prevIdx+10;
    nextIdx=(currIdx+1)%10;
    if(nextIdx>10) nextIdx=nextIdx-10;
   
})

prev.addEventListener('click',()=>{
    if(flag==false) {
        audioEle1[prevIdx].play();
        array[prevIdx].classList.remove('fa-play-circle');
        array[prevIdx].classList.add('fa-pause-circle');
        images.src=songs[prevIdx].coverPath
        info.innerHTML=songs[prevIdx].songName;
    }
    else{
        array[currIdx].classList.remove('fa-pause-circle')
        array[currIdx].classList.add('fa-play-circle')
        console.log(prevIdx)
        audioEle1[currIdx].pause();
        audioEle1[prevIdx].play();
        array[prevIdx].classList.remove('fa-play-circle');
        array[prevIdx].classList.add('fa-pause-circle');
        images.src=songs[prevIdx].coverPath
        info.innerHTML=songs[prevIdx].songName;
    }
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
    flag=true;
    currIdx=(currIdx-1)%10;
    prevIdx=(currIdx-1)%10;
    if(prevIdx<0) prevIdx=prevIdx+10;
    nextIdx=(currIdx+1)%10;
    if(nextIdx>10) nextIdx=nextIdx-10;
})

// Now handeling every click
for(let i=0;i<10;i++){
array[i].addEventListener('click',()=>{
   if(flag==false){
    array[i].classList.remove('fa-play-circle')
    array[i].classList.add('fa-pause-circle')
    audioEle1[i].play();
    images.src=songs[i].coverPath;
    info.innerHTML=songs[i].songName;
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
    pastIdx=currIdx;
    currIdx=i;
    flag=true;
   }
  else if(i!=currIdx ) {
    array[i].classList.remove('fa-play-circle')
    array[i].classList.add('fa-pause-circle')
    audioEle1[i].play()
    images.src=songs[i].coverPath;
    info.innerHTML=songs[i].songName;
    pastIdx=currIdx;
    currIdx=i;
        array[pastIdx].classList.remove('fa-pause-circle');
        array[pastIdx].classList.add('fa-play-circle');
        audioEle1[pastIdx].pause();
    
    flag=true;
  }
  else{
    array[i].classList.remove('fa-pause-circle')
    array[i].classList.add('fa-play-circle')
    audioEle1[i].pause();
    images.src="playing1.gif";
    masterplay.classList.remove('fa-pause-circle')
    masterplay.classList.add('fa-play-circle')
    flag=false;
    info.innerHTML="Music is language of love"
  }
  prevIdx=(currIdx-1)%10;
  if(prevIdx<0) prevIdx=prevIdx+10;
  nextIdx=(currIdx+1)%10;
  if(nextIdx>10) nextIdx=nextIdx-10;
})
}


//Listen to events
for(let l=0;l<10;l++){
audioEle1[l].addEventListener('timeupdate',()=>{
 // update seekbar
  progress=parseInt((audioEle1[l].currentTime/audioEle1[l].duration)*100);
  myProgressBar.value=progress;
  if(myProgressBar.value==100) {
    currIdx=(1+currIdx)%10;
    prevIdx=(currIdx-1)%10;
    if(prevIdx<0) prevIdx=prevIdx+10;
    nextIdx=(currIdx+1)%10;
    if(nextIdx>10) nextIdx=nextIdx-10;
    myProgressBar.value=0;
    audioEle1[currIdx].play();
}
})
}

myProgressBar.addEventListener('change', ()=>{
    audioEle1[currIdx].currentTime = myProgressBar.value * audioEle1[currIdx].duration/100;
    console.log(myProgressBar.value)
})
