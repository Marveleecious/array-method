output = document.getElementById
var list = [1, 2, 3, 4, 5];
var lists = [6, 7, 8, 9, 0];
console.log(list)
console.log(lists)

function myFunction() {
    x = document.getElementById("output")
    x.innerHTML = list.map(Math.sqrt);
}
//   console.log('findindex function')
// console.log(list.findIndex(lists > 5))

// console.log(list.reduce(lists))

console.log('from mrthod')
var myArr = Array.from("ABCDEFG");
console.log(myArr)

console.log('concat method')
  console.log(list.concat(lists))

  console.log('fill method')
  console.log(list.fill("Kiwi"));
// var ggg= ['ttt', 'ttttt', 'tttttttt']
  console.log('join method')
//   console.log(ggg.join("Kiwi"));
console.log(list.join('0'))

// console.log(list.reduceRight(list - 2))

