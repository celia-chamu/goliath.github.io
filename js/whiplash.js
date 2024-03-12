let whiplash = document.querySelector(".card");
let audio = document.querySelector(".enter");
let audio2 = document.querySelector(".exit");

whiplash.addEventListener("mouseover", () => {
    audio.play();
    audio2.pause();
});

whiplash.addEventListener("mouseout", () => {
    audio.pause();
    audio.currentTime = 0;
    audio2.play();
});
