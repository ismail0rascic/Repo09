function inverseWhile() {
    var fiveNumbers = "";
    var i = 5;
    while (i >= 0) {
        if (i == 5) {
            fiveNumbers += i;
            i--;
        } else {
            fiveNumbers += "," + i;
            i--;
        }
    }
    return fiveNumbers;
}
console.log(inverseWhile());
module.exports = inverseWhile;