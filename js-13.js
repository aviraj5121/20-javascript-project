var numbers = [];
var names = [ "Frank", "Kyle", "Peter", "Susan" ];

// Shuffle the names array to ensure each name has an equal chance of being selected
for (let i = names.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
}

let text = names[0];

do {
    let j = Math.floor(Math.random() * text.length);
    if (!numbers.includes(j)) {
        numbers.push(j);
        console.log(text.charAt(j));
    }
} while (numbers.length < text.length);