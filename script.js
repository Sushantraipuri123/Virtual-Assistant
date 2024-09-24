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
   takeCommand(transcript)

}

btn.addEventListener('click', () => {
    recogntion.start()
})

// take command function to make it working
function takeCommand(message){
    if (message.includes('hello')) {
        speak("hello....! how can I help you")
    }
}