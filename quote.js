const quotes = [
  "Deep thoughts cut straight to the heart - Sarah",
  "Top the world the world will top you - Sarah",
  "Water the water and the water will water you - Sarah",
  "Fear isn't an excuse - Sarah",
  "The truth plays the past - Sarah",
  "Within a young's heart makes a young's choice - Sarah",
  "The path isn't physical but it doesn't mean it's not there - Sarah",
  "Friends are the key to great childhood - Sarah",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "Be the change you wish to see in the world. - Mahatma Gandhi",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
];

const quoteElem = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote-btn');

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElem.textContent = quotes[randomIndex];
}

generateQuote();

newQuoteBtn.addEventListener('click', generateQuote);