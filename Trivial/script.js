// Mini Tool: Word Mood Analyzer

// Count total words.

// Count total characters (excluding spaces).

// Detect positive and negative words using a predefined list.

// Show the mood based on the count:

// More positive words → "Positive Mood 😊"

// More negative words → "Negative Mood 😔"

// Equal or none → "Neutral Mood 😐"

// Highlight the positive words in green and negative in red.

// Display all results inside a <div>. 






const positiveWords = ["happy", "great", "love", "awesome", "good", "fantastic", "amazing"];
const negativeWords = ["sad", "bad", "hate", "angry", "terrible", "horrible", "worst"];



const analyzeWords = () => {
    const userInput = document.getElementById("textByUser").value;
    const allWords = userInput.split(" ").filter(word => word.trim() !== "");
    const countAllWords = () => allWords.length;
    const countChars = () => userInput.replace(/\s/g, "").length;
    const posWordsList = () => allWords.filter(word => positiveWords.includes(word.toLowerCase()) );
    const negWordsList = () => allWords.filter(word => negativeWords.includes(word.toLowerCase()) );
    const posWords = () => posWordsList().map(word => `<span class="posWordColor">${word}</span>`).join(",")
    const negWords = () => negWordsList().map(word => `<span class="negWordColor">${word}</span>`).join(",")
    const mood = () => {
        if (posWordsList().length > negWordsList().length) {
            return "Positive Mood 😊" }
        if (posWordsList().length < negWordsList().length) {
            return "Negative Mood 😔" }
        else {
            return "Neutral Mood 😐"
        }
    }
    const resultHTML = 
    `
    <p><strong>Total Count Of Words : </strong>${countAllWords()}</p>
    <p><strong>Total Count Of Characters : </strong>${countChars()}</p>
    <p><strong>PosItive Words : </strong>${posWords()}</p>
    <p><strong>Negative Words : </strong>${negWords()}</p>
    <p><strong>Mood : </strong>${mood()}</p>
    `

    document.getElementById("moodResult").innerHTML = resultHTML;
}

const clearText = () => {
    document.getElementById("textByUser").value = "";
    document.getElementById("moodResult").innerHTML = ""
}


