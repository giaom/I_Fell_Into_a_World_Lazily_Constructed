/**
 * Function to save the game state to local storage.
 * @param {string} chapter - The current chapter filename (e.g., 'ch1.html').
 * @param {object} state - The state of the game (e.g., player dialogue, progress).
 */
function saveGameState(chapter, state) {
    const gameState = {
        chapter: chapter,
        state: state
    };

    // Save the state as a JSON string in localStorage
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

/**
 * Function to load the game state from local storage.
 */
function loadGameState() {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
        const gameState = JSON.parse(savedState);

        // Load the saved chapter
        if (gameState.chapter) {
            window.location.href = gameState.chapter;  // Navigate to the saved chapter
        }

        // Optionally update UI or other game elements based on the saved state
        if (gameState.state) {
            const dialogue = gameState.state.dialogue || 'No saved dialogue.';
            document.getElementById('dialogueText').innerText = dialogue;  // Update dialogue content (or any other game data)
        }
    }
}
