console.log("welcome to spotify");
let songindex = 0;
let audioelement = new Audio("1.mp3");
let masterplay = document.getElementById("masterPlay");
let myprogessbar = document.getElementById("myprogessbar");
let gif = document.getElementById("gif");
let songiteam = Array.from(document.getElementsByClassName("img"));
let song = [
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/1.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/2.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/3.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/4.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/5.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/6.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/7.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/8.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/9.mp3",
    coverpage: "1.jpg",
  },
  {
    songname: "salma isqh",
    filepath: "sofityfy/music/10.mp3",
    coverpage: "1.jpg",
  },
];
songiteam.forEach = (element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = song[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = song[i].songname;
};
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
  Progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  myprogessbar.value = Progress;
});
myprogessbar.addEventListener("change", () => {
  audioelement.currentTime = myprogessbar.value / 100;
});
