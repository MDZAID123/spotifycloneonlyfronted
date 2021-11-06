console.log("welcome to spotify ")
//initialise the variables
let songIndex=0;
//this song index will tell which song  of the sing array is being played currently
//
let audioElement =new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

let songItems=Array.from(document.getElementsByClassName("songItem"));



//masterPlay kiska id h


let songs= [
    {songName:"Salam-e-Ishq",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"sergoi constance",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"fegeg",filePath:"songs/3.mp3",coverPath:"covers/5.jpg"},
    {songName:"hello",filePath:"songs/4.mp3",coverPath:"covers/1.jpg"},
    {songName:"heaven",filePath:"songs/5.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/6.mp3",coverPath:"covers/3.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/7.mp3",coverPath:"covers/4.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/8.mp3",coverPath:"covers/9.jpg"},
    {songName:"beliver",filePath:"songs/1.mp3",coverPath:"covers/4.jpg"},
]

songItems.forEach((element,i) => {
    

    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

    // we can also use query selector here 


    
});
//now we will write logic for execution of spotify clone 


//understand what all executions and functionalities t
//they want while someone click the button

//in js array is ordered list of values 
//we will diplay all the songs of the  song array in the songlist div 
//diff parts me logic likho 
//note that logic of individual parts  should be connected
//myprogress bar me event listen karoonga to play if someone click on masterplay id button

//handle play and pause click
//you wil have some great knowledge when you have started developing and deploying your own ideas 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        // ie the song is either paused or not being played at all 
        audioElement.play();
        //note when song starts playing we also want that play icons should convert to pause 
        masterPlay.classList.remove('fa-play-circle');
        
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }else{
        audioElement.pause();
        //note when song starts playing we also want that play icons should convert to pause 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        

    }
})


//LISTEN TO THE EVENTS
//note that correct element me we have to listen time update 

audioElement.addEventListener('timeupdate',()=>{
    
    //update the seekbar 
    //usse pehle we need to play the song 
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    //note using the above progress value we will move our progress bar 
    myProgressBar.value=progress;
    // note that console statement will be shown on the console itself
    //now if the progress bar is changes by the user to the new postion
    //then  corresponding change should alsp be reflected in audio playing





})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration/100);
})


const makeAllPlays=()=>{
    //jitne play wale button h unko pause bandega this function '
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-play-circle');
        // just take care of the bracket 
        //not just try to make existing projects 
        //try to modify and innovate them as much as possible 

    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        // we need to change the cureent time to zero 
        //since the song has been changed
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        


        // e.target se i will get that element jispe click hua h


    })
    //here we are adding a click listener to that class

})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    // we need to change the cureent time to zero 
    //since the song has been changed
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    // we need to change the cureent time to zero 
    //since the song has been changed
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})



