console.log("welcome to spotify");
let songindex = 0;
let audioelement = new Audio("1.mp3");
let masterplay = document.getElementById("masterPlay");
let myprogessbar = document.getElementById("myprogessbar");
let gif = document.getElementById("gif");
let song = [
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "music/1.mp3",
    coverpage: "1.jpg",
  },
];
masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-play");
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-pause-play");
    masterplay.classList.add("fa-play-circle");
  }
});
document.addEventListener("timeupdate", () => {
  console.log("timeupdate");
});
