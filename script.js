document.addEventListener("DOMContentLoaded", function () {
    checkStoredTasks();
    playWelcomeSound();
});

document.querySelectorAll(".task-button").forEach(button => {
    button.addEventListener("click", function () {
        let taskNumber = this.getAttribute("data-task");
        let link = this.getAttribute("data-link");
        playSound("clickSound");

        this.innerHTML = "Loading...";
        playSound("loadingSound");

        setTimeout(() => {
            this.innerHTML = "✔ Task " + taskNumber + " Complete";
            this.style.backgroundColor = "green";
            playSound("successSound");

            saveTaskStatus(taskNumber);
            checkTasks();

            // লিংকে নিয়ে যাওয়া
            window.location.href = link;
        }, 5000);
    });
});

function saveTaskStatus(taskNumber) {
    let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
    if (!completedTasks.includes(taskNumber)) {
        completedTasks.push(taskNumber);
        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

        setTimeout(() => {
            localStorage.removeItem("completedTasks"); // 3 মিনিট পর রিসেট
        }, 180000);
    }
}

function checkStoredTasks() {
    let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

    document.querySelectorAll(".task-button").forEach(button => {
        let taskNumber = button.getAttribute("data-task");

        if (completedTasks.includes(taskNumber)) {
            button.innerHTML = "✔ Task " + taskNumber + " Complete";
            button.style.backgroundColor = "green";
        }
    });

    checkTasks();
}

function checkTasks() {
    let completedTasks = document.querySelectorAll(".task-button[style*='green']").length;
    if (completedTasks === 3) {
        playSound("completeSound");
        document.getElementById("playButton").disabled = false;
    }
}

document.getElementById("playButton").addEventListener("click", function () {
    playSound("finalSound");
    setTimeout(() => {
        window.location.href = this.getAttribute("data-link");
    }, 1000);
});

function playSound(soundId) {
    let sound = document.getElementById(soundId);
    sound.play();
}

function playWelcomeSound() {
    playSound("welcomeSound");
    setTimeout(() => {
        playSound("instructionSound");
    }, 2000);
}
