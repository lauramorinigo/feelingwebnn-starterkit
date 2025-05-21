# 🎤 Feeling your feelings - Web NN and Web Speech API ✨

Hey friend! 👋 In this quick codelab, we’re building a tiny web app that listens to your voice, checks the *vibes* (aka your mood), and shows a cute emoji reaction using real-time AI in the browser. Yep. Just with JavaScript.

No backend, no frameworks, no stress. Just pure web magic. 

---

## 🧠 What You’ll Learn

- How to use the **Web Speech API** to turn voice into text  
- How to do a baby version of **sentiment analysis** in JavaScript  
- How to run AI inference in the browser using **WebNN** (with a polyfill!)  


---

## 💻 What You Need

- A browser that enables testing of webnn (Like Edge or Chrome Canary)
- A working microphone 🎙️  
- Basic JavaScript knowledge (if you know `addEventListener`, you’re good)  
- 10 minutes (yes, that’s all!)

---

## 🗂️ Project Setup

```bash
git clone https://github.com/lauramorinigo/feelingswebnn-starterkit
cd voice-sentiment-webnn
```

Run index.html into a live server
---

## 1️⃣ Let’s Talk — Add Speech Recognition

In `main.js`, set up the Speech API:

```js
// Setup speech recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
```

Then listen for clicks to start listening:

```js
startBtn.addEventListener('click', () => {
  transcriptEl.textContent = '';
  sentimentEl.textContent = '';
  recognition.start();
});
```

---

## 2️⃣ Let’s Listen — Handle the Result

Grab the voice and process it:

```js
recognition.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;
  transcriptEl.textContent = transcript;

  // Now check the vibes 😎
  const vibe = await getSentiment(transcript);
  sentimentEl.textContent = vibe.emoji + ' ' + vibe.label;
};
```

---

## 3️⃣ Let’s Feel — Add Sentiment Detection

We’ll use a *very* basic mock function for now (you can level this up later with real AI):

```js
async function getSentiment(text) {
  // Pretend we're using a smart model (we’re not — yet!)
  const positiveWords = ['love', 'happy', 'awesome', 'good', 'great'];
  const negativeWords = ['hate', 'sad', 'bad', 'angry', 'terrible'];

  let score = 0;
  for (const word of positiveWords) if (text.includes(word)) score++;
  for (const word of negativeWords) if (text.includes(word)) score--;

  if (score > 0) return { label: 'Positive', emoji: '😊' };
  if (score < 0) return { label: 'Negative', emoji: '😢' };
  return { label: 'Neutral', emoji: '😐' };
}
```

---

## 4️⃣ Let’s Get Smart — Use WebNN for Real AI (Optional)

> Skip this if you're short on time — the basic version works without it!

If you’re feeling to go further, you can plug in WebNN (with polyfill) to run real ML models in the browser, let's connect it the function 
infereSentiment from webnn.js

```js
recognition.onresult = async (event) => {
  const transcript = event.results[0][0].transcript;
  transcriptEl.textContent = `You said: "${transcript}"`;

  const sentimentScore = await analyzeSentiment(transcript);
  const nnResult = await inferSentimentWebNN(sentimentScore);

  let emoji = '😐';
  if (nnResult > 0.5) emoji = '😊';
  if (nnResult < -0.5) emoji = '😠';

  sentimentEl.textContent = `Sentiment: ${emoji} (${nnResult.toFixed(2)})`;
};

---


## ✅ You Did It!

Now when you click the mic and say something like “I love ice cream,” the browser replies with:

```
😊 Positive
```

You just built a live voice → sentiment AI pipeline in JavaScript. In 10 minutes. You’re a wizard 🧙‍♀️

---

## 💡 Bonus Ideas

- Replace the `getSentiment` with a real ML model  (this is my personal next step, stay tuned)
- Animate emojis or trigger GIFs  
- Add voice feedback using `speechSynthesis`  
- Translate text before analyzing  
- Use it as a “how are you feeling?” check-in for wellness apps  

---

## 🧠 Credits

Built with love by Laura Morinigo
