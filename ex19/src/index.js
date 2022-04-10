function myDoWhile() {

    var myNumbers = "";
    var i = 0;
    do {
        if (i == 0) {
            myNumbers += i
            i++;
        } else {
            myNumbers += "," + i;
            i++;
        }
    }
    while (i < 10);

    return myNumbers;
}
console.log(myDoWhile());
myDoWhile();
module.exports = myDoWhile;