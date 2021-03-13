let song1 = document.querySelector("#song1");
let song2 = document.querySelector("#song2");
let song3 = document.querySelector("#song3");

let play__song1 = document.querySelector("#play__song1");
let play__song2 = document.querySelector("#play__song2");
let play__song3 = document.querySelector("#play__song3");

let playArr = document.querySelectorAll(".play");

song1.volume = song2.volume = song3.volume = 0.3;

playArr.forEach(playBtn => {
  playBtn.addEventListener("click", toggleMusics, false);
});

function toggleMusics() {
  let itemClass = this.className;

  for (let i = 0; i < playArr.length; i++) {
    playArr[i].className = "play not_playing";
  }

  console.log(itemClass);

  if (itemClass == "play") {
    this.previousElementSibling.play();

    // this.previousElementSibling.classList.remove(".not_playing")

    this.previousElementSibling.classList.toggle("playing");

    console.log(this.previousElementSibling.className);

    if (this.previousElementSibling.classList.contains("playing")) {
      this.innerHTML = "Pause";
    } else {
      this.innerHTML = "Play";
      this.previousElementSibling.pause();
    }

    // this.children[1].className = "home__third__projects__item__desc not-hidden";
  }
}

// play__song1.addEventListener("click", () => {
//   song1.play();

//   song1.classList.toggle("playing");

//   if (song1.classList.contains("playing")) {
//     play__song1.innerHTML = "Pause";
//   } else {
//     play__song1.innerHTML = "Play";
//     song1.pause();
//   }
// });

// play__song2.addEventListener("click", () => {
//   song2.play();

//   song2.classList.toggle("playing");

//   if (song2.classList.contains("playing")) {
//     play__song2.innerHTML = "Pause";
//   } else {
//     play__song2.innerHTML = "Play";
//     song2.pause();
//   }
// });

// play__song3.addEventListener("click", () => {
//   song3.play();

//   song3.classList.toggle("playing");

//   if (song3.classList.contains("playing")) {
//     play__song3.innerHTML = "Pause";
//   } else {
//     play__song3.innerHTML = "Play";
//     song3.pause();
//   }
// });
