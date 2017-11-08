/*
https://www.codewars.com/kata/land-perimeter/train/javascript

Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:
['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO']
 should return: "Total land perimeter: 24"
*/  

function landPerimeter(arr) {
  let landArr = [];
  let perimeter = 0;
  arr.forEach(string => {
    string.split('').forEach((type, index) => {
      if (type === 'X') {
        landArr.push(index);
      }
    })
  });
  console.log(landArr.sort());
}

landPerimeter([
  "OXOOOX",
  "OXOXOO",
  "XXOOOX",
  "OXXXOO",
  "OOXOOX",
  "OXOOOO", 
  "OOXOOX",
  "OOXOOO",
  "OXOOOO",
  "OXOOXX"]);
