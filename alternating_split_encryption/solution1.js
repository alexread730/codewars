/*
https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:
"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
*/

function encrypt(text, n) {

  let str1 = '';
  let str2 = '';

  if (text === null || text === '' || n <= 0) {
    return console.log(text);
  }

  for (i = 0; i < n; i++) {
    text.split('').forEach((letter, index) => {
      if (index % 2 !== 0) {
        str1 += letter
      } else {
        str2 += letter
      }
    })
    text = str1+str2;
    str1 = '';
    str2 = '';

  }
   return console.log(text);

}

function decrypt(encryptedText, n) {

  let midLength = Math.floor(encryptedText.length/2);
  let decryptedText = '';

  for (i = 0; i < n; i++) {
    let evens = encryptedText.substr(0, midLength);
    let odds = encryptedText.substr(midLength);

    for (i = 0; i < encryptedText.length; i++) {
      decryptedText += odds.charAt(i);
      decryptedText += evens.charAt(i);
    }

    encryptedText = decryptedText
    console.log(decryptedText);
  }


}

encrypt("This kata is very interesting!", 1);
decrypt("s eT ashi tist!", 4)
