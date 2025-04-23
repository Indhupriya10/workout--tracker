function startWarmupTimer(day) {
    let duration = 60;
    let display = document.getElementById(`warmupTimer${day}`);
    
    let interval = setInterval(() => {
        display.textContent = duration;
        duration--;

        if (duration < 0) {
            clearInterval(interval);
            alert("Warm-up Complete!");
        }
    }, 1000);
}

function startHiitTimer(day) {
    let duration = 45;
    let display = document.getElementById(`hiitTimer${day}`);
    
    let interval = setInterval(() => {
        display.textContent = duration;
        duration--;

        if (duration < 0) {
            clearInterval(interval);
            alert("HIIT Set Complete!");
        }
    }, 1000);
}

function updateProgress() {
    let checkboxes = document.querySelectorAll("#progress input[type='checkbox']");
    let checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    let percentComplete = (checkedBoxes / 7) * 100;
    document.getElementById("progressStatus").textContent = `Completion: ${percentComplete.toFixed(0)}%`;
}

function updateCalories() {
    let caloriesBurned = parseInt(document.getElementById("caloriesInput").value);
    let totalCalories = parseInt(document.getElementById("totalCalories").textContent.split(": ")[1]) || 0;
    totalCalories += caloriesBurned;
    document.getElementById("totalCalories").textContent = `Total Calories This Week: ${totalCalories}`;
}