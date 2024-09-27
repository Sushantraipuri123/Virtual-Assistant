let btn = document.querySelector('#btn');
let content = document.querySelector('#content');

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak)
}

// greeting function

function wishMe() {
    let day = new Date()
   let hours = day.getHours()
    // console.log(hours)
    if (hours>=0 && hours < 12 ) {
        speak("Good morning")
    }
    else if (hours>=12 && hours < 16 ) {
        speak("Good afternoon")
    }else{
        speak("Good evening")
    }
   
}

window.addEventListener("load", ()=>{
    // wishMe()
})

// speach ecognization that we speak 
let speachRecognization = window.SpeechRecognition || window.webkitSpeechRecognition

let recogntion = new speachRecognization()
recogntion.onresult=(event) => {
    let currentIndex = event.resultIndex
   let transcript=  event.results[currentIndex][0].transcript
   content.innerText = transcript
   takeCommand(transcript.toLowerCase())

}

btn.addEventListener('click', () => {
    recogntion.start()
})

// take command function to make it working
function takeCommand(message){
    if (message.includes('hello') || message.includes('hey') || message.includes('hii')){
        speak("hello....! how can I help you")
    }
    else if(message.includes('who are you')){
        speak("I am hyna an Virtual Assistant , Created by Sushant")
    }else if(message.includes('open youtube')){
        speak("Opening Youtube..")
        window.open('https://www.youtube.com/',"_blank")
    }else if (message.includes('what time is it')) {
        const time = new Date().toLocaleTimeString();
        speak(`The current time is ${time}.`);
    }else if (message.includes('calculate')) {
        const calculation = message.replace('calculate', '').trim();
        try {
            const result = eval(calculation);
            speak(`The result is ${result}.`);
        } catch (error) {
            speak("Sorry, I couldn't calculate that.");
        }
    } else if (message.includes('play music') || message.includes('open spotify')) {
        speak("Playing music...");
        window.open('https://www.spotify.com/', "_blank"); // Example: opens Spotify
    }  else if (message.includes('tell me a joke')) {
        speak("Why don't scientists trust atoms? Because they make up everything!");
    } else if (message.includes('how are you')) {
        speak("I'm just a program, but thanks for asking! How can I assist you today?");
    } else if (message.includes('search for')) {
        const query = message.replace('search for', '').trim();
        speak(`Searching for ${query}...`);
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    } else {
        speak("I'm sorry, I didn't understand that. Can you please rephrase?");
    }
}