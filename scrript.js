output = document.getElementById('output')
var list = [1, 2, 3, 4, 5, 'timi', 'thief'];
var lists = [6, 7, 8, 9, 0, 'daniel'];
console.log(list)
console.log(lists)


function myFunction() {
    output = document.getElementById("output")
    output.innerHTML = numbers.map(Math.sqrt);
}
//   console.log('findindex function')
// console.log(list.findIndex(lists > 5))

// console.log(list.reduce(lists))
output5 = document.getElementById('output5')
output5.innerHTML = "from method";
// console.log('from mrthod')
var myArr = Array.from("ABCDEFG");
output5.innerHTML = myArr;
// console.log(myArr)

output2 = document.getElementById('output2');
output2.innerHTML = "concat method "
output2.innerHTML = list.concat(lists)
// console.log('concat method')
  // console.log(list.concat(lists))

  output3 = document.getElementById('output3');
  output3.innerHTML = "fill method "
  output3.innerHTML = list.fill('spoon')
  // console.log('fill method')
  // console.log(list.fill("spoon"));
// var ggg= ['ttt', 'ttttt', 'tttttttt']

output4 = document.getElementById('output4');
output4.innerHTML = "join method "
output4.innerHTML = list.join('0')
  console.log('join method')
//   console.log(ggg.join("spoon"));
// console.log(list.join('0'))

// console.log(list.reduceRight(list - 2))

