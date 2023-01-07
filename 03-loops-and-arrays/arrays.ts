let sports : string[] = ['Tenis', 'Volleyball', 'Basketball', 'Football', 'Soccer'];

for (let i =0 ; i < sports.length; i++ ) {
    console.log(sports[i]);
}

for (let sportOne of sports) { 
    if (sportOne == 'Tenis') {
        console.log(`${sportOne} is my favorite!`);
    }
}