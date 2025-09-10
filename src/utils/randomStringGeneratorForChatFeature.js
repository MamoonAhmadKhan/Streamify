var sentences = [
  "The sun is shining brightly.",
  "She loves to read books in the evening.",
  "I enjoy playing football with my friends.",
  "The cat is sleeping on the sofa.",
  "We are planning a trip to the mountains.",
  "He drinks coffee every morning.",
  "They are watching a movie together.",
  "The dog barked loudly at the stranger.",
  "She is writing a letter to her friend.",
  "I found a beautiful shell on the beach.",
  "He runs faster than anyone in the class.",
  "We cooked pasta for dinner last night.",
  "The baby is smiling at her mother.",
  "She sings very well.",
  "The car stopped suddenly in the middle of the road.",
  "He bought a new phone yesterday.",
  "I like to listen to soft music.",
  "They played cricket in the park.",
  "The teacher explained the lesson clearly.",
  "She painted a picture of the sunset.",
  "We celebrated his birthday with a cake.",
  "The bird flew away quickly.",
  "He always wakes up early in the morning.",
  "I forgot my umbrella at home.",
  "The shop opens at 9 in the morning.",
  "She watered the plants in the garden.",
  "We met an old friend at the market.",
  "The river flows quietly through the valley.",
  "He is studying hard for the exam.",
  "I want to learn a new language."
];


let maxSentences = sentences.length;

export function generateRandomString () {
    var index= Math.floor(Math.random() * (maxSentences - 1));
    return sentences[index];
}