let currentSceneId = localStorage.getItem("currentScene") || "start";
let sceneData = null;

document.addEventListener("DOMContentLoaded", () => {
    fetch("data/dch1.json")
        .then(res => res.json())
        .then(data => {
            sceneData = data.dialogue;
            loadScene(currentSceneId);
        });

    document.getElementById("nextBtn").addEventListener("click", () => {
        const scene = getScene(currentSceneId);
        if (scene && scene.next) {
            loadScene(scene.next);
        }
    });
});

function getScene(id) {
    return sceneData.find(d => d.id === id);
}

function loadScene(id) {
    const scene = getScene(id);
    if (!scene) return;

    localStorage.setItem("currentScene", id);
    currentSceneId = id;

    const dialogueText = document.getElementById("dialogue-text");
    const codeBox = document.getElementById("code-snippet");
    const sceneBg = document.getElementById("scene-bg");
    const nextBtn = document.getElementById("nextBtn");
    const choicesBox = document.getElementById("choices");

    dialogueText.innerHTML = scene.speaker ? `<strong>${scene.speaker}:</strong> ${scene.text || ""}` : "";
    codeBox.textContent = scene.code || "";
    sceneBg.src = scene.background ? `images/${scene.background}` : "";

    choicesBox.innerHTML = "";

    if (scene.choices) {
        nextBtn.style.display = "none";
        scene.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.textContent = choice.text;
            btn.onclick = () => loadScene(choice.next);
            choicesBox.appendChild(btn);
        });
    } else {
        nextBtn.style.display = "block";
    }
}
