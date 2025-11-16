const startBtn = document.querySelector("button#testStart");

function getRandomInt() {
    return Math.floor(Math.random() * (7 - 2)) + 1;
}

startBtn.addEventListener("click", () => {
    const nameInput = document.querySelector("input#name").value;
    if (nameInput == "") {
        localStorage.setItem("name", "Anon");
    } else {
        localStorage.setItem("name", JSON.stringify(nameInput));
    }
    window.location.href = "/pages/test.html";
});

window.addEventListener("DOMContentLoaded", () => {
    localStorage.clear();
    localStorage.setItem("randInt1", getRandomInt());
    localStorage.setItem("randInt2", getRandomInt());
    localStorage.setItem("randInt3", getRandomInt());
    localStorage.setItem("randInt4", getRandomInt());
});