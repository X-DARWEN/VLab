// Initialize variables
let dotCount = 0;
const loadingText = document.getElementById('loading-text');

function updateLoadingText() {
    // Add dots based on the dotCount
    let dots = '.'.repeat(dotCount);
    loadingText.innerHTML = `Loading${dots}`;

    // Increment the dot count or reset to 0 if it reaches 3
    dotCount = (dotCount + 1) % 4; // Loop through 0 to 3

    // If dotCount is 0 (meaning 3 dots were shown), wait for 4 seconds before resetting
    if (dotCount === 0) {
        clearInterval(loadingInterval);
        setTimeout(() => {
            // Change the scene after 4 seconds of showing 3 dots
            window.location.href = "Editor/Editor.html"; // Change this to the next scene
        }, 4000); // Wait for 4 seconds
    }
}

// Set an interval to update the loading text every 500ms (half a second)
const loadingInterval = setInterval(updateLoadingText, 500);