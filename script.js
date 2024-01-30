
function speaking(text){
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1;
    speakData.rate = 0.7;
    speakData.text = text;

    speechSynthesis.speak(speakData);
}

function startListening(){
    const recognition = new window.webkitSpeechRecognition();

    recognition.lang = 'en-US'; 
    recognition.interimResults = false; 
    recognition.maxAlternatives = 1;
    
    recognition.onresult = function(event){
        const transcript = event.results[0][0].transcript;
        console.log(transcript)

        if(transcript.toLowerCase().includes("jarvis")){
            speaking("Hello sir, how can i help you?")
            
        }else if(transcript.toLowerCase().includes('youtube' || 'open youtube')){
            speaking("opening youtube")
            window.open('https://youtube.com')
        }else if(transcript.toLowerCase().includes('owner' || 'creator' || 'founder')){
            speaking("Tajbir islam is my owner and creator")
        }

    }

    recognition.onend = function(){
        recognition.start()
    }
    recognition.start();
}

window.onload = function() {
    startListening();
}