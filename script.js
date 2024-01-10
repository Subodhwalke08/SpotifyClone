console.log("Welcome to Spotify");

// Initialize the variables
let songIndex=0;
let audioElement = new Audio('Softly.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from (document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Softly", filePath:"Softly.mp3", coverPath: "Cover 1.png" },
    {songName: "Temporary Pyar", filePath:"Temporary pyar.mp3", coverPath: "Cover 2.png" },
    {songName: "Mitti De Tibbe", filePath:"Mitti De Tibbe.mp3", coverPath: "Cover 1.png" },
    {songName: "Libas", filePath:"Libaas.mp3", coverPath: "Cover 1.png" },
    {songName: "Born To Shine", filePath:"Born-To-Shine.mp3", coverPath: "Cover 2.png" },
    {songName: "Surma Surma", filePath:"Surma Surma.mp3", coverPath: "Cover 3.png"}
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementByTagName("img")[0].src = songs[i].filePath;  

})
// audioElement.play();

// Handel play /pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//Listen to the Events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    // Mathematical Concept
    progres = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progres);
    myProgressBar.value = progres;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})