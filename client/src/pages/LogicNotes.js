//Powerball Numbers come in as an Array(6) datatype.  Index 5 is the Powerball.

//this.state.powerballs[5] is the powerball, [0] - [4] are the Whiteballs.

//To Do:
// Disable signup button and login buttons unless the required fields are filled.
// Change favicon logo

let arr1 = ['12', '17', '24', '37', '38', '43'],
    arr2 = ['22', '47', '24', '38', '38', '44'];

var matches = arr1.filter(function (item) {
    return arr2.indexOf(item) > -1
})
console.log(matches)
console.log("Total matches: ", matches.length)


let memberNumbers = ['12', '15', '34']
let winningNumbers = ['12', '03', '22']


var matches = memberNumbers.filter(mat => winningNumbers.indexOf(mat) > -1)

console.log(matches)
