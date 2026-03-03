const chatWindow = document.getElementById("chatbotWindow");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");

/* Resume Knowledge Base */
const data = {
name: "Monisha Prakasam",
education: "B.A., LL.B. (Hons.), SASTRA Deemed University, Expected 2026",
skills: [
"Legal Research", "Drafting", "Client Communication",
"Critical Thinking", "Organizational Skills"
],
languages: ["Tamil", "English", "Telugu", "Malayalam", "Hindi"],
internships: {
"2026": "Adv. Rahul Kumar Singh (Remote)",
"2025": "Adv. B.S. Jeganathan (Chennai)",
"2024": "Adv. C. Muthusaravanan, Adv. R. Sreedhar, K. Munusami & Co.",
"2023": "Adv. Thenmozhi (Thanjavur)",
"2022": "Adv. Vadivelu (Madurai & Thanjavur)"
},
research: {
corporate: "Corporate Criminal Liability — International Journal for Multidisciplinary Research",
labour: "Impact of COVID-19 on Labourers — IJMR",
ip: "Ambush Marketing in India — IJLLR"
}
};

/* Send message to chat */
function sendMessage(text, sender = "user") {
const msg = document.createElement("div");
msg.className = sender === "user" ? "userMsg" : "botMsg";
msg.textContent = text;
chatBody.appendChild(msg);
chatBody.scrollTop = chatBody.scrollHeight;
}

/* AI response logic */
function generateResponse(input) {
input = input.toLowerCase();

```
if (input.includes("name")) return `My name is ${data.name}.`;
if (input.includes("education")) return data.education;

if (input.includes("skills"))
    return "My key skills are: " + data.skills.join(", ");

if (input.includes("language"))
    return "I speak: " + data.languages.join(", ");

if (input.includes("internship") || input.includes("experience")) {
    if (input.includes("2026")) return data.internships["2026"];
    if (input.includes("2025")) return data.internships["2025"];
    if (input.includes("2024")) return data.internships["2024"];
    if (input.includes("2023")) return data.internships["2023"];
    if (input.includes("2022")) return data.internships["2022"];
    return "I have multiple internships from 2022 to 2026. Ask about a specific year!";
}

if (input.includes("research") || input.includes("paper")) {
    if (input.includes("corporate")) return data.research.corporate;
    if (input.includes("labour")) return data.research.labour;
    if (input.includes("ip")) return data.research.ip;
    return "I have published 3 research papers: Corporate Law, Labour Law, and IP.";
}

if (input.includes("contact"))
    return "You can contact me at monishaprakasam18@gmail.com.";

return "I'm not sure about that. Try asking about my skills, internships, education, or research!";
```

}

/* Handle chat input */
chatInput.addEventListener("keypress", (e) => {
if (e.key === "Enter" && chatInput.value.trim() !== "") {
const userText = chatInput.value.trim();
sendMessage(userText, "user");
chatInput.value = "";

```
    setTimeout(() => {
        const reply = generateResponse(userText);
        sendMessage(reply, "bot");
    }, 600);
}
```

});

/* Style for chat messages */
const style = document.createElement("style");
style.textContent = `.userMsg {
    background: var(--accent);
    color: white;
    margin: 6px 0;
    padding: 8px;
    border-radius: 6px;
}
.botMsg {
    background: var(--glass-bg);
    border: 1px solid var(--border);
    padding: 8px;
    margin: 6px 0;
    border-radius: 6px;
}`;
document.head.appendChild(style);
