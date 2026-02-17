function changeMessage() {
    const messages = [
        "🎉 You clicked the button!",
        "✨ Git is awesome!",
        "🚀 Keep learning!",
        "💪 You're doing great!",
        "🎯 Practice makes perfect!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
}

console.log("Welcome to your first Git project!");