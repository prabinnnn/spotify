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
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-pause-play");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioelement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  Progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  console.log(Progress);
});
