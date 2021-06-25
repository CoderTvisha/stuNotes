function startRead(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("inputArea").value;
    utterThis = new SpeechSynthesisUtterance(speak_data);
    console.log(speak_data);
    synth.speak(utterThis);
}

function pauseRead(){
    utterThis.addEventListener('pause', function(event) {
        console.log('Speech paused after ' + event.elapsedTime + ' milliseconds.');
      });
}

