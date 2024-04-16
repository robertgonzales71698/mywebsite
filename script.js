// You can add JavaScript functionalities if needed

// Repeat the content of the marquee with more space between each repetition
const marqueeContent = "Still in Development. "; // Content to repeat
const repetitions = 10; // Number of repetitions
const extraSpaces = "         ".repeat(10); // Add more spaces between repetitions
const spacedContent = (marqueeContent + extraSpaces).repeat(repetitions); // Repeat content and add more spaces between each repetition
document.getElementById("repeat-marquee").innerText = spacedContent;