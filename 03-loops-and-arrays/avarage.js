var numArr = [1, 2, 3, 4, 5];
var total = 0;
for (var _i = 0, numArr_1 = numArr; _i < numArr_1.length; _i++) {
    var num = numArr_1[_i];
    total += num;
}
console.log("avarage is: ".concat(total / numArr.length));
