const btn = document.getElementById('btn')


function speaking(text){

    if(speechSynthesis.speaking){
        return;
    }

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



// keywords start

const hello = ['hey', 'hello', 'hey jarvis', 'hello jarvis'];
const youtube = ['open youtube', 'jarvis open youtube', 'youtube'];
const facebook = ['open facebook', 'jarvis open facebook', 'facebook'];
const owner = ['owner', 'creator', 'founder'];

// keywords end


function startListening(){
    const recognition = new window.webkitSpeechRecognition();
    
    recognition.onresult = function(event){
        const transcript = event.results[0][0].transcript;
        console.log(transcript)

        if(hello.some(keyword => transcript.toLowerCase().includes(keyword))){
            speaking("Hello sir, how can i help you?")
            
        }else if(youtube.some(keyword => transcript.toLowerCase().includes(keyword))){
            speaking("opening youtube")
            windowOpenUrl = 'https://youtube.com'

        }else if(owner.some(keyword => transcript.toLowerCase().includes(keyword))){
            speaking("Tajbir islam is my owner and creator")

        }else if(facebook.some(keyword => transcript.toLowerCase().includes(keyword))){
            speaking("opening facebook");
            windowOpenUrl = 'https://facebook.com'

        }

    }

    recognition.onend = function(){
        recognition.start()
    }
    recognition.start();
}



btn.addEventListener('click', ()=> {
    startListening();
    speaking('hello sir, i am listening')
})

// window.onload = function() {
//     startListening();
// }