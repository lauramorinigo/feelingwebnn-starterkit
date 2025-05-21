// TODO: Import sentiment + WebNN functions
// import { analyzeSentiment } from './sentiment.js';
// import { inferSentimentWebNN } from './webnn.js';

const startBtn = document.getElementById('start-btn');
const transcriptEl = document.getElementById('transcript');
const sentimentEl = document.getElementById('sentiment');

// TODO: Setup SpeechRecognition


startBtn.addEventListener('click', () => {
  transcriptEl.textContent = '';
  sentimentEl.textContent = '';
  // TODO: Start recognition

});


// TODO: recognition.onresult = (event) => { ... }
  
recognition.onresult = async (event) => {
   
}
