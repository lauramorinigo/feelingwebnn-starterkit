// TODO: Import sentiment + WebNN functions
// import { analyzeSentiment } from './sentiment.js';
// import { inferSentimentWebNN } from './webnn.js';

const startBtn = document.getElementById('start-btn');
const transcriptEl = document.getElementById('transcript');
const sentimentEl = document.getElementById('sentiment');

// TODO: Setup SpeechRecognition
// const recognition = new ...

startBtn.addEventListener('click', () => {
  transcriptEl.textContent = '';
  sentimentEl.textContent = '';
  // TODO: Start recognition
});


// TODO: recognition.onresult = (event) => { ... }
  // const transcript = ...
  // transcriptEl.textContent = transcript;

  // const score = await analyzeSentiment(transcript);
  // const finalScore = await inferSentimentWebNN(score);

  // sentimentEl.textContent = finalScore > 0 ? '😊' : finalScore < 0 ? '😢' : '😐';
