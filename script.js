document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("output");
    const inputField = document.getElementById("input");

    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const input = inputField.value.trim();
            processCommand(input);
            inputField.value = "";
        }
    });

    function processCommand(input) {
        if (input.toLowerCase() === "help") {
            addOutput("Available commands: help, joke, clear");
        } else if (input.toLowerCase() === "joke") {
            addOutput("Why do programmers prefer dark mode? Because light attracts bugs!");
        } else if (input.toLowerCase() === "clear") {
            output.innerHTML = "";
        } else {
            // Zufällige Antworten auf unbekannte Befehle
            const randomResponses = [
                "Hmm... das ist geheim!",
                "Zugriff verweigert!",
                "Systemfehler: Bitte probiere es später erneut.",
                "Ich arbeite dran...",
                "Das bleibt ein Geheimnis.",
                "Die Antwort darauf ist in den Tiefen des Darknets versteckt.",
                "Versuch's nochmal. Vielleicht mit einem anderen Befehl.",
                "Hacker werden nicht erkannt, sie finden ihren eigenen Weg.",
                "404: Command not found."
            ];
            const randomIndex = Math.floor(Math.random() * randomResponses.length);
            addOutput(randomResponses[randomIndex]);
        }
    }

    function addOutput(text) {
        const newLine = document.createElement("div");
        newLine.textContent = text;
        output.appendChild(newLine);
        output.scrollTop = output.scrollHeight;
    }
});
