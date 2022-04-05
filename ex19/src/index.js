function myDoWhile() {

    var myNumber = "";
    var i = 0;
    do {
        if (i == 0) {
            myNumber += i
            i++;
        } else {
            myNumber += "," + i;
            i++;
        }
    }
    while (i < 10);

    return myNumber;
}
console.log(myDoWhile());
myDoWhile();
module.exports = myDoWhile;