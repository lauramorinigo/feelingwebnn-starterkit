export async function analyzeSentiment(text) {

  // TODO fill the array with positive emotions 
  const positives = [];
  const negatives = ['hate', 'bad', 'angry', 'terrible', 'sad'];

  let score = 0;
  const words = text.toLowerCase().split(/\s+/);

  // TODO: Loop through words and adjust score based on match


  return score / 5; // normalize
}
