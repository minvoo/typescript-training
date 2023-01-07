var sports = ['Tenis', 'Volleyball', 'Basketball', 'Football', 'Soccer'];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sportOne = sports_1[_i];
    if (sportOne == 'Tenis') {
        console.log("".concat(sportOne, " is my favorite!"));
    }
}
