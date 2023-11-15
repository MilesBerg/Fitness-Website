const fitnessForm = document.getElementById("fitness-form");
const dietForm = document.getElementById("diet-form");
const fitnessEntries = document.getElementById("fitness-entries");
const dietEntries = document.getElementById("diet-entries");

fitnessForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const activity = document.getElementById("activity").value;
    const duration = document.getElementById("duration").value;
    
    if (activity && duration) {
        const entry = `${activity} - ${duration} minutes`;
        const entryElement = document.createElement("div");
        entryElement.textContent = entry;
        fitnessEntries.appendChild(entryElement);
        
        document.getElementById("activity").value = "";
        document.getElementById("duration").value = "";
    }
});

dietForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const food = document.getElementById("food").value;
    const calories = document.getElementById("calories").value;
    
    if (food && calories) {
        const entry = `${food} - ${calories} calories`;
        const entryElement = document.createElement("div");
        entryElement.textContent = entry;
        dietEntries.appendChild(entryElement);
        
        document.getElementById("food").value = "";
        document.getElementById("calories").value = "";
    }
});
