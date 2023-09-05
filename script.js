// Get references to the video and button elements
const video = document.getElementById("backgroundVideo");
const wowButton = document.getElementById("wowButton");

// Add a click event listener to the "WOW" button
wowButton.addEventListener("click", function () {
    // Check if the video is currently playing
    if (!video.paused) {
        // If it's playing, slow down the playback rate
        video.playbackRate = 0.7; // Adjust the value to control the speed (0.5 means half-speed)
    }
});
