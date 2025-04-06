/**
 * Function to go back to the home page, saving the current game state before navigation.
 */
function goHome() {
    // Get the current chapter (this example assumes the URL is in the format 'ch1.html')
    const currentChapter = window.location.pathname.split('/').pop();  // Extracts 'ch1.html'

    // Save the current game state (customize the state as necessary, here 'dialogue' is used as an example)
    saveGameState(currentChapter, { dialogue: 'Player is at a specific point in Chapter 1.' });

    // Navigate back to the home page
    window.location.href = 'index.html';
}

/**
 * Function to toggle the pause state and save progress.
 */
function togglePause() {
    const isPaused = document.getElementById('pauseOverlay').style.display === 'flex';

    if (isPaused) {
        // Unpause the game (hide the pause overlay)
        document.getElementById('pauseOverlay').style.display = 'none';

        // Optionally, load game state (e.g., restore UI or chapter state)
        loadGameState();
    } else {
        // Pause the game (show the pause overlay)
        document.getElementById('pauseOverlay').style.display = 'flex';

        // Save progress when pausing
        const currentChapter = window.location.pathname.split('/').pop();
        saveGameState(currentChapter, { dialogue: 'Player paused in Chapter 1 at a certain point.' });
    }
}
