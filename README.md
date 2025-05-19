# 🎤 Talk to Me: Voice + Sentiment + AI = Magic ✨

Hey friend! 👋 In this quick codelab, we’re building a tiny web app that listens to your voice, checks the *vibes* (aka your mood), and shows a cute emoji reaction using real-time AI in the browser. Yep. Just with JavaScript.

No backend, no frameworks, no stress. Just pure web magic. Ready? Let’s go! 🏁

---

## 🧠 What You’ll Learn

- How to use the **Web Speech API** to turn voice into text  
- How to do a baby version of **sentiment analysis** in JavaScript  
- How to run AI inference in the browser using **WebNN** (with a polyfill!)  
- How to be ✨ that dev ✨ in just 10 minutes  

---

## 💻 What You Need

- Chrome or Edge browser  
- A working microphone 🎙️  
- Basic JavaScript knowledge (if you know `addEventListener`, you’re good)  
- 10 minutes (yes, that’s all!)

---

## 🗂️ Project Setup

```bash
git clone https://github.com/YOUR_USERNAME/voice-sentiment-webnn.git
cd voice-sentiment-webnn
```

Or just drag `index.html` into your browser like it’s 2008 😎

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

If you’re feeling spicy 🌶️, you can plug in WebNN (with polyfill) to run real ML models in the browser.

```js
// This is a placeholder — full WebNN code goes here if using the polyfill
// You can load a model using fetch, convert inputs to tensors, and run inference
```

---

## 5️⃣ Wire It Up — HTML IDs

Make sure your HTML has:

```html
<button id="startBtn">🎙️ Talk</button>
<p id="transcript"></p>
<p id="sentiment"></p>
```

---

## ✅ You Did It!

Now when you click the mic and say something like “I love ice cream,” the browser replies with:

```
😊 Positive
```

You just built a live voice → sentiment AI pipeline in JavaScript. In 10 minutes. You’re a wizard 🧙‍♀️

---

## 💡 Bonus Ideas

- Replace the `getSentiment` with a real ML model  
- Animate emojis or trigger GIFs  
- Add voice feedback using `speechSynthesis`  
- Translate text before analyzing  
- Use it as a “how are you feeling?” check-in for wellness apps  

---

## 🧠 Credits

Built with love by [Your Name]  
Powered by Web Speech API + fake but fabulous JavaScript AI 💅
