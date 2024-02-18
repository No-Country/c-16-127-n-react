const firstLetterToUpperCase = (title) => {
  const textToArray = title.split("");
  for (let i = 0; i < textToArray.length; i++) {
    if (i === 0) textToArray[i] = textToArray[i].toUpperCase();
  }
  return textToArray.join("");
};

export { firstLetterToUpperCase };
