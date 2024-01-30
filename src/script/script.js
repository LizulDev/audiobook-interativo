

const playButton = document.getElementById("play-pause");
const chapterAudio = document.getElementById("audio-capitulo");
const forwardButton = document.getElementById("proximo");
const backwardButton = document.getElementById("anterior");
const chapterName = document.getElementById("capitulo");
const chaptersNumber = 10;
let currentChapter = 1;
let isPlaying = false;

function playChapter(){
    chapterAudio.play();
    playButton.classList.remove('bi-play');
    playButton.classList.add('bi-pause');
}

function pauseChapter() {
    chapterAudio.pause();
    playButton.classList.remove('bi-pause');
    playButton.classList.add('bi-play');

}

function playOrPause(){
    if(isPlaying===false){
        playChapter();
        isPlaying = true;
    } else {
        pauseChapter();
        isPlaying = false;
    }
} 

function switchChapterName(){
    chapterName.innerText = 'CAPITULO ' + currentChapter;
}

function nextChapter(){
    if (currentChapter != chaptersNumber) {
        currentChapter++;
    } else {
        currentChapter = 1;
    }

    chapterAudio.src = "./src/books/dom-casmurro/" + currentChapter + ".mp3";
    playChapter();
    isPlaying = true;
    switchChapterName();
}

function previousChapter(){
    if (currentChapter == chaptersNumber){
        currentChapter = 1;
    } else {
        currentChapter--;
    }
    chapterAudio.src = "./src/books/dom-casmurro/" + currentChapter + ".mp3";
    playChapter();
    isPlaying = true;
    switchChapterName();
}

playButton.addEventListener("click", playOrPause);
forwardButton.addEventListener("click", nextChapter);
backwardButton.addEventListener("click", previousChapter)