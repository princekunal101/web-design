
const audioPlayer = document.getElementById('audio-player');
const audioFiles = ['https://raw.githubusercontent.com/princekunal101/web-design/main/screenshot/audio/sample-song.mp3', 'https://raw.githubusercontent.com/princekunal101/web-design/main/screenshot/audio/sample-song-2.mp3', 'https://raw.githubusercontent.com/princekunal101/web-design/main/screenshot/audio/sample-song-3.mp3']; // Add your own song paths

let currentTrack = 0;

function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

function stop() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function next() {
  currentTrack = (currentTrack + 1) % audioFiles.length;
  audioPlayer.src = audioFiles[currentTrack];
  audioPlayer.play();
}

// Automatically play the first track when the page loads
audioPlayer.src = audioFiles[currentTrack];
audioPlayer.play();

