/* ---------------------------------------------------
SLIDE-UP ANIMATIONS ON SCROLL
--------------------------------------------------- */
const slideElements = document.querySelectorAll(".slide-up");

function revealOnScroll() {
slideElements.forEach(el => {
const rect = el.getBoundingClientRect();
if (rect.top < window.innerHeight - 100) {
el.classList.add("visible");
}
});
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ---------------------------------------------------
DARK / LIGHT THEME TOGGLE
--------------------------------------------------- */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

/* ---------------------------------------------------
CIRCULAR SKILL RINGS ANIMATION
--------------------------------------------------- */
const rings = document.querySelectorAll(".skill-ring");

rings.forEach(ring => {
const percent = ring.getAttribute("data-percent");
const circle = document.createElement("div");
circle.classList.add("progress");

```
circle.style.position = "absolute";
circle.style.width = "100%";
circle.style.height = "100%";
circle.style.borderRadius = "50%";
circle.style.border = "10px solid transparent";
circle.style.borderTopColor = "var(--accent)";
circle.style.borderRightColor = "var(--accent)";
circle.style.transform = `rotate(${percent * 1.8}deg)`;
circle.style.transition = "1.2s ease";

setTimeout(() => {
    ring.appendChild(circle);
}, 300);
```

});

/* ---------------------------------------------------
SMART FILTERING SYSTEM
--------------------------------------------------- */
const internshipFilter = document.getElementById("internshipFilter");
const researchFilter = document.getElementById("researchFilter");
const certFilter = document.getElementById("certFilter");

/* Internship Filtering */
internshipFilter.addEventListener("change", () => {
const items = document.querySelectorAll(".timeline-item");

```
items.forEach(item => {
    const year = item.getAttribute("data-year");
    item.style.display = (internshipFilter.value === "all" || internshipFilter.value === year)
        ? "block" : "none";
});
```

});

/* Research Filter */
researchFilter.addEventListener("change", () => {
const papers = document.querySelectorAll("#papers li");

```
papers.forEach(el => {
    const category = el.getAttribute("data-category");
    el.style.display = (researchFilter.value === "all" || researchFilter.value === category)
        ? "block" : "none";
});
```

});

/* Certification Filter */
certFilter.addEventListener("change", () => {
const certs = document.querySelectorAll("#certifications li");

```
certs.forEach(el => {
    const category = el.getAttribute("data-category");
    el.style.display = (certFilter.value === "all" || certFilter.value === category)
        ? "block" : "none";
});
```

});

/* ---------------------------------------------------
CHATBOT POPUP TOGGLE
--------------------------------------------------- */
const chatIcon = document.getElementById("chatbotIcon");
const chatWindow = document.getElementById("chatbotWindow");

chatIcon.addEventListener("click", () => {
chatWindow.style.display =
chatWindow.style.display === "flex" ? "none" : "flex";
});

/* ---------------------------------------------------
PARTICLES.JS INITIALIZATION
--------------------------------------------------- */
particlesJS.load("particles-js", "particles.json", function () {
console.log("Particles loaded.");
});
