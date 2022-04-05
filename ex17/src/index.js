function inverseWhile() {
    var fiveNumber = "";
    var i = 5;
    while (i >= 0) {
        if (i == 5) {
            fiveNumber += i;
            i--;
        } else {
            fiveNumber += "," + i;
            i--;
        }
    }
    return fiveNumber;
}
console.log(inverseWhile());
module.exports = inverseWhile;