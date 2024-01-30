
function speaking(text){
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1;
    speakData.rate = 1;
    speakData.text = text;

    speechSynthesis.speak(speakData);

    speakData.onend = function (event){

        if(windowOpenUrl && windowOpenUrl != ''){
            window.open(windowOpenUrl);
            windowOpenUrl = '';
            speechSynthesis.cancel()
        }
    }
}

let windowOpenUrl = ''


function startListening(){
    const recognition = new window.webkitSpeechRecognition();
    
    recognition.onresult = function(event){
        const transcript = event.results[0][0].transcript;
        console.log(transcript)

        if(transcript.toLowerCase().includes("hey jarvis" || "hey" || "hello")){
            speaking("Hello sir, how can i help you?")
            
        }else if(transcript.toLowerCase().includes('youtube')){
            speaking("opening youtube")
            windowOpenUrl = 'https://youtube.com'

        }else if(transcript.toLowerCase().includes('owner' || 'creator' || 'founder')){
            speaking("Tajbir islam is my owner and creator")

        }else if(transcript.toLowerCase().includes('facebook')){
            speaking("opening facebook");
            windowOpenUrl = 'https://facebook.com'

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