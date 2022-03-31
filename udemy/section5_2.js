function validAnagram(char1, char2) {
  if (char1.length !== char2.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < char1.length; i++) {
    let letter = char1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < char2.length; i++) {
    let letter = char2[i];
    if (!lookup[letter]) {
      console.log(lookup[letter]);
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // f
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // f
console.log(validAnagram('qwerty', 'qeywet')); // f
