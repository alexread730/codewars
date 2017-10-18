/*
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


  console.log(text);

}

function decrypt(encryptedText, n) {

}

encrypt("This is a test!", 2);
